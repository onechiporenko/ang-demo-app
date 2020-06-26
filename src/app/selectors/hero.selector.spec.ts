import { getHeroesWithBooks } from './hero.selector';
import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import {
  ENTITY_METADATA_TOKEN,
  EntityAction,
  EntityActionFactory,
  EntityDataModuleWithoutEffects,
  EntityMetadataMap,
  EntityOp
} from '@ngrx/data';
import { Hero } from '../models/hero.model';
import { Book } from '../models/book.model';

let store;
let eaFactory: EntityActionFactory;

const entityMetadataMap: EntityMetadataMap = {
  Book: {},
  Hero: {}
};

describe('HeroSelectors', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), EntityDataModuleWithoutEffects],
      providers: [
        {
          provide: ENTITY_METADATA_TOKEN,
          multi: true,
          useValue: entityMetadataMap,
        }
      ],
    });
    store = TestBed.inject(Store);
    eaFactory = TestBed.inject(EntityActionFactory);
  });

  describe('#getHeroesWithBooks', () => {

    const hero1 = {id: '1', name: 'Jim Raynor', bio: '', age: 44, bookIds: ['1']};
    const book1 = {id: '1', name: 'test', heroIds: ['1'], description: ''};

    beforeEach(() => {
      // add data to store - one hero and one book
      let action: EntityAction;
      action = eaFactory.create<Hero[]>('Hero', EntityOp.ADD_ALL, [hero1]);
      store.dispatch(action);
      action = eaFactory.create<Book[]>('Book', EntityOp.ADD_ALL, [book1]);
      store.dispatch(action);
    });

    it('should return heroes with books', (done: DoneFn) => {
      store.select(getHeroesWithBooks).subscribe(data => {
        expect(data).toEqual([{
          ...hero1,
          bookIds: [book1.id],
          books: [book1]
        }]);
        done();
      });
    });

  });

});
