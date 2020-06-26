import { Component, OnInit } from '@angular/core';
import { BookCollectionService } from '../../services/collection/book.service';
import { Observable } from 'rxjs';
import { Book } from '../../models/book.model';
import { select, Store } from '@ngrx/store';
import { getBooksWithHeroes } from '../../selectors/book.selector';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  faPlus = faPlus;

  books$: Observable<Book[]>;

  constructor(private bookCollectionService: BookCollectionService, private store: Store) {
  }

  ngOnInit(): void {
    this.bookCollectionService.getAll();
    this.books$ = this.store.pipe(select(getBooksWithHeroes));
  }

  onDeleteBook(hero): Observable<number | string> {
    return this.bookCollectionService.delete(hero);
  }

}
