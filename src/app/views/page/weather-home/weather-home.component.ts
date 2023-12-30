import { WeatherDatas } from 'src/app/core/models/interfaces/weatherData';
import { WeatherService } from './../../../core/service/weather.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.scss']
})
export class WeatherHomeComponent implements OnInit, OnDestroy{
private readonly destroy$: Subject<void>  = new Subject();
form!: FormGroup;
weatherData!: WeatherDatas;
searchIcon = faMagnifyingGlass;
  constructor(
    private service: WeatherService,
    private formBuilder: FormBuilder,) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      cityName: [null, [Validators.required]],
    });
    this.getWeatherDatas('Valparaíso de Goiás');
  }


  getWeatherDatas(cityName: string): void {
    	this.service.getWeatherDatas(cityName)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response => {
          response && (this.weatherData = response)

        }),
        error: (error) => {
          console.log(error);
        }
  });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.getWeatherDatas(this.form.controls['cityName'].value);
      this.form.get('cityName')?.patchValue(null);

    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
