/*
 * HORTONWORKS DATAPLANE SERVICE AND ITS CONSTITUENT SERVICES
 *
 * (c) 2016-2018 Hortonworks, Inc. All rights reserved.
 *
 * This code is provided to you pursuant to your written agreement with Hortonworks, which may be the terms
 * of the Affero General Public License version 3 (AGPLv3), or pursuant to a written agreement with a third party
 * authorized to distribute this code.  If you do not have a written agreement with Hortonworks or with
 * an authorized and properly licensed third party, you do not have any rights to this code.
 *
 * If this code is provided to you under the terms of the AGPLv3: A) HORTONWORKS PROVIDES THIS CODE TO YOU
 * WITHOUT WARRANTIES OF ANY KIND; (B) HORTONWORKS DISCLAIMS ANY AND ALL EXPRESS AND IMPLIED WARRANTIES WITH
 * RESPECT TO THIS CODE, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY
 * AND FITNESS FOR A PARTICULAR PURPOSE; (C) HORTONWORKS IS NOT LIABLE TO YOU, AND WILL NOT DEFEND, INDEMNIFY,
 * OR HOLD YOU HARMLESS FOR ANY CLAIMS ARISING FROM OR RELATED TO THE CODE; AND (D) WITH RESPECT
 * TO YOUR EXERCISE OF ANY RIGHTS GRANTED TO YOU FOR THE CODE, HORTONWORKS IS NOT LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE OR CONSEQUENTIAL DAMAGES INCLUDING, BUT NOT LIMITED TO,
 * DAMAGES RELATED TO LOST REVENUE, LOST PROFITS, LOSS OF INCOME, LOSS OF BUSINESS ADVANTAGE OR UNAVAILABILITY,
 * OR LOSS OR CORRUPTION OF DATA.
 */

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

const defaultDataServiceConfig: DefaultDataServiceConfig = {
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
