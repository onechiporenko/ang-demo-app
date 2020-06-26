import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../models/book.model';
import { ConfirmationModalComponent } from '../modals/confirmation-modal/confirmation-modal.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  @Input() books: Book[] = [];
  @Input() actionable = true;
  @Output() deleteBook = new EventEmitter<Book>();

  faTrashAlt = faTrashAlt;
  faEdit = faEdit;

  constructor(private modalService: BsModalService) {
  }

  ngOnInit(): void {
  }

  onDeleteBook(book: Book): void {
    this.modalService.show(ConfirmationModalComponent, {initialState: {confirm: this.deleteBook, payload: book}});
  }

}
