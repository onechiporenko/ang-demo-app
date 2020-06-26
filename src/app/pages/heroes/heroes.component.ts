import { Component, OnInit } from '@angular/core';
import { HeroCollectionService } from '../../services/collection/hero.service';
import { Observable } from 'rxjs';
import { Hero } from '../../models/hero.model';
import { select, Store } from '@ngrx/store';
import { getHeroesWithBooks } from '../../selectors/hero.selector';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes$: Observable<Hero[]>;

  constructor(private heroCollectionService: HeroCollectionService, private store: Store) { }

  ngOnInit(): void {
    this.heroCollectionService.getAll();
    this.heroes$ = this.store.pipe(select(getHeroesWithBooks));
  }

  onDeleteHero(hero): Observable<number | string> {
    return this.heroCollectionService.delete(hero);
  }

}
