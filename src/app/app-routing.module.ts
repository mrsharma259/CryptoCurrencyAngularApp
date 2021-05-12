import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import {CryptoListComponent} from './crypto-list/crypto-list.component';
//import {DetailsComponent} from './details/details.component';


const routes: Routes = [
  // {path:'crypto', component:CryptoListComponent}
  //{path:'details', component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
