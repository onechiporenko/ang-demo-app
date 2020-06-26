import { Component, OnInit } from '@angular/core';
import { HeroCollectionService } from '../../../services/collection/hero.service';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hero } from '../../../models/hero.model';
import { heroSelectors } from '../../../selectors/hero.selector';
import { BookCollectionService } from '../../../services/collection/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateBookComponent implements OnInit {

  heroes$: Observable<Hero[]>;

  constructor(private bookCollectionService: BookCollectionService,
              private heroCollectionService: HeroCollectionService,
              private router: Router,
              private store: Store) {
    this.heroCollectionService.getAll();
    this.heroes$ = this.store.pipe(select(heroSelectors.selectEntities));
  }

  ngOnInit(): void {
  }

  onSaveBook(book): void {
    this.bookCollectionService.add(book).subscribe(createdBook => {
      this.router.navigate(['/books', createdBook.id]);
      return createdBook;
    });
  }

}
