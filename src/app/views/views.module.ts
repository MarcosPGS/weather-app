import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherHomeComponent } from './page/weather-home/weather-home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherCardComponent } from './page/components/weather-card/weather-card.component';


@NgModule({
  declarations: [

    WeatherHomeComponent,
     WeatherCardComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class ViewsModule { }
