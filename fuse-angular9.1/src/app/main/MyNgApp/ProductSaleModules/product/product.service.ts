import { Injectable } from '@angular/core';
import { Product } from './product.modle';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from 'app/main/apiConfig';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: Product[] = [];
  onProductListChanged: BehaviorSubject<Product[]>;
  private url = ApiConfig.BaseUrl;
  private controller = 'Product';

  constructor(private http: HttpClient) {
    this.onProductListChanged = new BehaviorSubject([]);
  }


  // tslint:disable-next-line:typedef
  save(model: Product) {
        return this.http.post(this.url + this.controller, model);

  }

  // tslint:disable-next-line:typedef

  get(): Promise<Product> {
    return new Promise((resolve) => {
      this.http.get(this.url + this.controller).subscribe(
        (res: Product[]) => {
          this.productList = res;
          this.onProductListChanged.next(this.productList);

        });
    });
  }
  // tslint:disable-next-line:typedef
  delete(id: number) {
    return this.http.delete(this.url + this.controller + '/' + id);
  }

  // tslint:disable-next-line:typedef
  edit(model: Product) {
    return this.http.put(this.url + this.controller + '/' + model.id, model);

  }
}
