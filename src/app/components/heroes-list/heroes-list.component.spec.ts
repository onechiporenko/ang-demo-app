import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesListComponent } from './heroes-list.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Hero } from '../../models/hero.model';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

describe('HeroesListComponent', () => {
  let component: HeroesListComponent;
  let fixture: ComponentFixture<HeroesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FontAwesomeTestingModule,
        ModalModule.forRoot()
      ],
      declarations: [ HeroesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show heroes list', () => {
    fixture = TestBed.createComponent(HeroesListComponent);
    component = fixture.componentInstance;
    const compiled = fixture.nativeElement;
    component.heroes = [{id: '1', name: 'Jim Raynor'} as Hero];
    fixture.detectChanges();
    expect(compiled.querySelector('li').textContent).toContain('Jim Raynor');
  });
});
