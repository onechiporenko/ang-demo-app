import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import { RouterModule } from '@angular/router';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { PipesModule } from '../pipes/pipes.module';
import { ConfirmationModalComponent } from './modals/confirmation-modal/confirmation-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ManageBookComponent } from './manage-book/manage-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    BooksListComponent,
    HeroesListComponent,
    HeroDetailsComponent,
    BookDetailsComponent,
    ConfirmationModalComponent,
    ManageBookComponent
  ],
  exports: [
    BooksListComponent,
    HeroesListComponent,
    HeroDetailsComponent,
    BookDetailsComponent,
    ConfirmationModalComponent,
    ManageBookComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
    AlertModule,
    ModalModule.forRoot()
  ]
})
export class ComponentsModule { }
