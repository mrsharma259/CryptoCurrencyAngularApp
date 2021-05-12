import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  constructor(private service: SharedService) { }

  CryptoList:any=[];

  ActivateDetailsComp: boolean = false;
  det:any;
  display:string = "none";

  ngOnInit(): void {
    this.refreshCryptoList();
  }

  refreshCryptoList(){
    this.service.getCryptoList().subscribe(data=>{
      this.CryptoList = data;
    });
  }

  closeClick(){
    this.ActivateDetailsComp = false;
    this.display ="none";
  }
  
  detailsClick(item: any){
    this.det = item;
    console.log(this.det);
    this.ActivateDetailsComp = true;
    this.display = "block";
  }

}
