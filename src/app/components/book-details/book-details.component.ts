import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  faEdit = faEdit;

  @Input() book: Book = {} as Book;

  constructor() {
  }

  ngOnInit(): void {
  }

}
