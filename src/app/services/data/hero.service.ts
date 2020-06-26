import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  HttpUrlGenerator,
  DefaultDataServiceConfig, DefaultDataService
} from '@ngrx/data';
import { Hero } from '../../models/hero.model';
import { Observable } from 'rxjs';

@Injectable()
export class HeroDataService extends DefaultDataService<Hero> {

  constructor(http: HttpClient,
              httpUrlGenerator: HttpUrlGenerator,
              config: DefaultDataServiceConfig) {
    super('Hero', http, httpUrlGenerator, config);
  }

}
