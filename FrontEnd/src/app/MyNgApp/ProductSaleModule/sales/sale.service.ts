import { Injectable } from '@angular/core';
import { Sale } from './sale.model';
import { BehaviorSubject } from 'rxjs';
import { ApiConfig } from 'src/app/apiConfig';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  saleList: Sale[] = [];
  onSaleListChanged: BehaviorSubject<Sale[]>;

  private url = ApiConfig.BaseUrl;

  private controller = 'Sale';

  constructor(private http: HttpClient) {
    this.onSaleListChanged = new BehaviorSubject([]);
  }


  // tslint:disable-next-line:typedef
  save(model: Sale) {
    return this.http.post(this.url + this.controller, model);

  }

  // tslint:disable-next-line:typedef

  get(): Promise<Sale> {
    return new Promise((resolve) => {
      this.http.get(this.url + this.controller).subscribe(
        (res: Sale[]) => {
          this.saleList = res;
          this.onSaleListChanged.next(this.saleList);

        });
    });
  }

  // tslint:disable-next-line:typedef
  delete(id: number) {
    return this.http.delete(this.url + this.controller + '/' + id);
  }

  // tslint:disable-next-line:typedef
  edit(model: Sale) {
    return this.http.put(this.url + this.controller + '/' + model.id, model);

  }
}
