import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import { BookCollectionService } from '../../services/collection/book.service';
import { collectionServiceStub } from '../../mocks/collection.service.mock';
import { HeroCollectionService } from '../../services/collection/hero.service';
import { provideMockStore } from '@ngrx/store/testing';
import { ComponentsModule } from '../../components/components.module';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ComponentsModule
      ],
      declarations: [ HeroesComponent ],
      providers: [
        { provide: BookCollectionService, useValue: collectionServiceStub },
        { provide: HeroCollectionService, useValue: collectionServiceStub },
        provideMockStore({initialState: {}}),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
