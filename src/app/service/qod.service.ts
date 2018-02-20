import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class QodService {

  constructor(private _http: HttpClient) { }

  getQoD() : Observable<IQod>{
    return this._http.get<IQod>("https://quotes.rest/qod");
  }

}
export interface IQod {
  success: Success;
  contents: Contents;
  }
  
  export interface Contents {
  quotes: Quote[];
  copyright: string;
  }
  
  export interface Quote {
  quote: string;
  author: string;
  length: string;
  tags: string[];
  category: string;
  title: string;
  date: string;
  id?: any;
  background: string;
  }
  
  export interface Success {
  total: number;
  }
