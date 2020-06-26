import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookComponent } from './edit.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BookCollectionService } from '../../../../services/collection/book.service';
import { collectionServiceStub } from '../../../../mocks/collection.service.mock';
import { HeroCollectionService } from '../../../../services/collection/hero.service';
import { provideMockStore } from '@ngrx/store/testing';
import { ComponentsModule } from '../../../../components/components.module';

describe('EditBookComponent', () => {
  let component: EditBookComponent;
  let fixture: ComponentFixture<EditBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ComponentsModule
      ],
      declarations: [ EditBookComponent ],
      providers: [
        { provide: BookCollectionService, useValue: collectionServiceStub },
        { provide: HeroCollectionService, useValue: collectionServiceStub },
        provideMockStore({initialState: {}}),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
