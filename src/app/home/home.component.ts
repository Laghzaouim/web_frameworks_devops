import { Component, OnInit } from '@angular/core';
import { IQod, QodService } from '../service/qod.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: IQuote
  constructor(private _svc: QodService) {}

  ngOnInit() {
    this._svc.getQoD().subscribe(result => this.data = this.MapResult( result));
  }
//TOD0 
 private MapResult(result: IQod):IQuote{
     return{
       title: result.contents.quotes[0].title,
       quote: result.contents.quotes[0].quote,
     };
   }
}

interface IQuote{
  title : string;
  quote: string;
}


