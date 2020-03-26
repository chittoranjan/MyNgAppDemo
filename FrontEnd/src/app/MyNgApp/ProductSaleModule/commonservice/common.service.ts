import { Injectable } from '@angular/core';
import { ApiConfig } from 'src/app/apiConfig';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private urlAddress = ApiConfig.BaseUrl;

  constructor(
    // tslint:disable-next-line: variable-name
    private _http: HttpClient
    ) { }
  // tslint:disable-next-line:typedef
  getPeoductType() {
    return this._http.get(this.urlAddress + 'ProductType');
  }
}
