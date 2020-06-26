import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Book } from '../../models/book.model';

@Injectable({providedIn: 'root'})
export class BookCollectionService extends EntityCollectionServiceBase<Book> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Book', serviceElementsFactory);
  }
}
