import {
  EntityDataService,
  DefaultDataServiceConfig,
  EntityServices,
  EntityCollectionReducerRegistry
} from '@ngrx/data';
import { NgModule } from '@angular/core';

import { HeroDataService } from './services/data/hero.service';
import { HeroCollectionService } from './services/collection/hero.service';
import { BookDataService } from './services/data/book.service';
import { BookCollectionService } from './services/collection/book.service';

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:12345/api/v1/'
};

@NgModule({
  imports: [],
  providers: [
    HeroDataService,
    BookDataService,
    {provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig},
  ]
})
export class EntityStoreModule {
  constructor(
    entityCollectionReducerRegistry: EntityCollectionReducerRegistry,

    entityDataService: EntityDataService,
    heroDataService: HeroDataService,
    bookDataService: BookDataService,

    entityServices: EntityServices,
    heroCollectionService: HeroCollectionService,
    bookCollectionService: BookCollectionService
  ) {
    entityDataService.registerServices({
      Hero: heroDataService,
      Book: bookDataService
    });
    entityServices.registerEntityCollectionServices([
      heroCollectionService,
      bookCollectionService
    ]);

    entityCollectionReducerRegistry.registerReducers({
    });
  }
}
