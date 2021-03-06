import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [HomeComponent, InfoComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class HomepageModule { }
