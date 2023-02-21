import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Modules
import { RoutingModule } from './routing.modules';
//Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
