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

import { BookDataService } from './book.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {
  DefaultDataServiceConfig,
  EntityDataModule
} from '@ngrx/data';
import { entityConfig } from '../../entity-metadata';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { defaultDataServiceConfig } from '../../entity-store.module';

let bookDataService;
let httpTestingController;

export const fail = e => {
  throw new Error(e);
};

describe('BookDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        EffectsModule.forRoot([]),
        EntityDataModule.forRoot(entityConfig),
        StoreModule.forRoot({})
      ],
      providers: [
        BookDataService,
        {
          provide: DefaultDataServiceConfig,
          useValue: defaultDataServiceConfig
        }
      ]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    bookDataService = TestBed.inject(BookDataService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });


  describe('#getAll', () => {

    it('should do a valid request', () => {
      const expected = [{
        id: '1',
        name: 'test',
        description: 'test',
        heroIds: ['1', '2', '3']
      }];
      bookDataService
        .getAll()
        .subscribe(books => expect(books).toEqual(expected), fail);

      const req = httpTestingController.expectOne('http://localhost:12345/api/v1/books/');
      expect(req.request.method).toBe('GET');
      expect(req.request.body).toBeNull();
      req.flush(expected);
    });

  });

});
