import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  HttpUrlGenerator,
  DefaultDataServiceConfig, DefaultDataService
} from '@ngrx/data';
import { Book } from '../../models/book.model';

@Injectable()
export class BookDataService extends DefaultDataService<Book> {

  constructor(http: HttpClient,
              httpUrlGenerator: HttpUrlGenerator,
              config: DefaultDataServiceConfig) {
    super('Book', http, httpUrlGenerator, config);
  }

}
