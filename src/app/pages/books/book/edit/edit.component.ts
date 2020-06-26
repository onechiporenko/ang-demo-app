import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../../../models/book.model';
import { select, Store } from '@ngrx/store';
import { getSingleBook } from '../../../../selectors/book.selector';
import { BookCollectionService } from '../../../../services/collection/book.service';
import { HeroCollectionService } from '../../../../services/collection/hero.service';
import { Observable } from 'rxjs';
import { Hero } from '../../../../models/hero.model';
import { heroSelectors } from '../../../../selectors/hero.selector';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditBookComponent implements OnInit {

  book$: Observable<Book>;
  heroes$: Observable<Hero[]>;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private bookCollectionService: BookCollectionService,
              private heroCollectionService: HeroCollectionService,
              private store: Store) {
    const bookId = this.activatedRoute.snapshot.params.id;
    this.bookCollectionService.getByKey(bookId);
    this.heroCollectionService.getAll();
    this.book$ = this.store.pipe(select(getSingleBook(bookId)));
    this.heroes$ = this.store.pipe(select(heroSelectors.selectEntities));
  }

  ngOnInit(): void {
  }

  onSaveBook(book: Book): void {
    this.bookCollectionService.update(book).subscribe(_ => {
      this.router.navigate(['/books', book.id]);
      return _;
    });
  }

}
