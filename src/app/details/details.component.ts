import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  @Input() det:any;
  details: any;
  coins:  any;

  ngOnInit(): void {
    this.details = this.det;
    this.coins = Math.round(this.details.price * 100) / 100;
    console.log(this.coins);
  }

}
