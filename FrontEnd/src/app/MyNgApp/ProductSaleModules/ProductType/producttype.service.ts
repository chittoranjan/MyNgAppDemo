import { Injectable } from '@angular/core';
import { ProductType } from './product-type.model';
import { BehaviorSubject } from 'rxjs';
import { ApiConfig } from 'src/app/apiConfig';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProducttypeService {

  productTypeList: ProductType[] = [];
  onProductTypeListChanged: BehaviorSubject<ProductType[]>;

  private url = ApiConfig.BaseUrl;

  private controller = 'ProductType';

  constructor(private http: HttpClient) {
    this.onProductTypeListChanged = new BehaviorSubject([]);
  }


  // tslint:disable-next-line:typedef
  save(model: ProductType) {
    return this.http.post(this.url + this.controller, model);

  }

  // tslint:disable-next-line:typedef

  get(): Promise<ProductType> {
    return new Promise((resolve) => {
      this.http.get(this.url + this.controller).subscribe(
        (res: ProductType[]) => {
          this.productTypeList = res;
          this.onProductTypeListChanged.next(this.productTypeList);

        });
    });
  }

  // tslint:disable-next-line:typedef
  delete(id: number) {
    return this.http.delete(this.url + this.controller + '/' + id);
  }

  // tslint:disable-next-line:typedef
  edit(model: ProductType) {
    return this.http.put(this.url + this.controller + '/' + model.id, model);

  }
}
