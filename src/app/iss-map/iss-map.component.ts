import { Component, OnInit } from '@angular/core';
import { ICoord, SpaceStationService } from '../service/space-station.service';

@Component({
  selector: 'app-iss-map',
  templateUrl: './iss-map.component.html',
  styleUrls: ['./iss-map.component.scss']
})
export class IssMapComponent implements OnInit {

  //Gebruik deze property om de huidige positie van het ISS in op te slaan en weer te geven
  current : ICoord;

  _lat : number = 49;
  _lng: number = 49;

  _date = new Date();

  _datum:string = "gjqfj";
  
  constructor(private _svc: SpaceStationService) { 
    
  }

  ngOnInit() {
    this._svc.getPosition()
      .subscribe(result => {
        this.current = result;
        //De lng en lat is niet gelukt 
        this._lng = result.long;
        this._lat = result.lat;
        //this.Setlng(result);
      });
      debugger;
      
      //this._date = new Date();
      
      console.log(this._lng);
      console.log(this._lng);
      
  }

  Setlng(result: ICoord){
    //debugger;
    //this._lng = result.lat;
    
  }

}

