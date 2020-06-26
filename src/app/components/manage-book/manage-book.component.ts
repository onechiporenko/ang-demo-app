import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../models/book.model';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'app-manage-book',
  templateUrl: './manage-book.component.html',
  styleUrls: ['./manage-book.component.css']
})
export class ManageBookComponent implements OnInit, OnChanges {

  @Input() book: Book = {} as Book;
  @Input() heroes: Hero[] = [];

  @Output() saveBook = new EventEmitter<Book>();

  bookForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(10)]),
    description: new FormControl(''),
    heroes: new FormControl([], Validators.required),
    heroIds: new FormControl([], Validators.required)
  });

  multiSelectSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'name',
    itemsShowLimit: 20,
    allowSearchFilter: true,
    enableCheckAll: false
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.book) {
      this.bookForm.patchValue(changes.book.currentValue);
    }
  }

  addHero(hero): void {
    const heroIds = [...this.bookForm.get('heroIds').value];
    if (heroIds.indexOf(hero.id) === -1) {
      heroIds.push(hero.id);
      this.bookForm.patchValue({heroIds});
    }
  }

  removeHero(hero): void {
    const heroIds = [...this.bookForm.get('heroIds').value];
    const index = heroIds.indexOf(hero.id);
    if (index > -1) {
      heroIds.splice(index, 1);
      this.bookForm.patchValue({heroIds});
    }
  }

  onHeroesDropDownClose(): void {
    this.bookForm.get('heroes').markAsTouched();
  }

  onSubmit(): void {
    const {heroes, ...payload} = this.bookForm.value;
    // no need to save `heroes` - it's UI property
    this.saveBook.emit(payload);
  }

}
