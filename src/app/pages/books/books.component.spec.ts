import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksComponent } from './books.component';
import { BookCollectionService } from '../../services/collection/book.service';
import { collectionServiceStub } from '../../mocks/collection.service.mock';
import { HeroCollectionService } from '../../services/collection/hero.service';
import { provideMockStore } from '@ngrx/store/testing';
import { ComponentsModule } from '../../components/components.module';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ComponentsModule,
        RouterTestingModule,
        FontAwesomeTestingModule
      ],
      declarations: [BooksComponent],
      providers: [
        { provide: BookCollectionService, useValue: collectionServiceStub },
        { provide: HeroCollectionService, useValue: collectionServiceStub },
        provideMockStore({initialState: {}}),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
