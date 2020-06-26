import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../models/hero.model';
import { HeroCollectionService } from '../../../services/collection/hero.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { getSingleHero } from '../../../selectors/hero.selector';
import { BookCollectionService } from '../../../services/collection/book.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero$: Observable<Hero>;

  constructor(private heroCollectionService: HeroCollectionService,
              private bookCollectionService: BookCollectionService,
              private activatedRoute: ActivatedRoute,
              private store: Store) { }

  ngOnInit(): void {
    const heroId = this.activatedRoute.snapshot.params.id;
    this.heroCollectionService
      .getByKey(heroId)
      .subscribe((hero: Hero) => this.bookCollectionService.getWithQuery({id: hero.bookIds}));
    this.hero$ = this.store.pipe(select(getSingleHero(heroId)));
  }

}
