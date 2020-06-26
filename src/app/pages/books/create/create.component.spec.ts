import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookComponent } from './create.component';
import { BookCollectionService } from '../../../services/collection/book.service';
import { HeroCollectionService } from '../../../services/collection/hero.service';
import { collectionServiceStub } from '../../../mocks/collection.service.mock';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ComponentsModule } from '../../../components/components.module';

describe('CreateBookComponent', () => {
  let component: CreateBookComponent;
  let fixture: ComponentFixture<CreateBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ComponentsModule,
        RouterTestingModule
      ],
      declarations: [ CreateBookComponent ],
      providers: [
        { provide: BookCollectionService, useValue: collectionServiceStub },
        { provide: HeroCollectionService, useValue: collectionServiceStub },
        provideMockStore({initialState: {}}),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
