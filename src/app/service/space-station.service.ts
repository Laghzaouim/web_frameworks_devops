import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import "rxjs/add/observable/of";

@Injectable()
export class SpaceStationService {

  //De historiek van posities kan je hier 'cachen'
  history: ICoord[] = [];

  constructor(private _http: HttpClient) { }

  // Haal de huidige positie van het ISS op
  getPosition():Observable<ICoord>{
    return this._http.get<ICoord>("http://api.open-notify.org/iss-now.json");
    
  }

  // Haal de bewaarde posities (historiek) van het ISS op
  getHistory() {
    
  }

  //Sla een positie bij op in de historiek
  AddHistory(coord: ICoord) {
    
  }
}

//gebruik deze interface om:
//mee te binden in je component
//mee te sturen/ontvangen van je eigen REST API service
export interface ICoord {
  lat: number;
  long: number;
  date: Date;
}