import { Component, OnInit } from '@angular/core';
import { BookCollectionService } from '../../../services/collection/book.service';
import { HeroCollectionService } from '../../../services/collection/hero.service';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../../../models/book.model';
import { getSingleBook } from '../../../selectors/book.selector';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book$: Observable<Book>;

  constructor(private heroCollectionService: HeroCollectionService,
              public bookCollectionService: BookCollectionService,
              private activatedRoute: ActivatedRoute,
              private store: Store) { }

  ngOnInit(): void {
    const bookId = this.activatedRoute.snapshot.params.id;
    this.bookCollectionService
      .getByKey(bookId)
      .subscribe((book: Book) => this.heroCollectionService.getWithQuery({id: book.heroIds}));
    this.book$ = this.store.pipe(select(getSingleBook(bookId)));
  }

}
