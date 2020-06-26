import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroComponent } from './hero.component';
import { provideMockStore } from '@ngrx/store/testing';
import { BookCollectionService } from '../../../services/collection/book.service';
import { collectionServiceStub } from '../../../mocks/collection.service.mock';
import { HeroCollectionService } from '../../../services/collection/hero.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentsModule } from '../../../components/components.module';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ComponentsModule,
        RouterTestingModule
      ],
      declarations: [ HeroComponent ],
      providers: [
        { provide: BookCollectionService, useValue: collectionServiceStub },
        { provide: HeroCollectionService, useValue: collectionServiceStub },
        provideMockStore({initialState: {}}),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
