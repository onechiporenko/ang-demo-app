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
import { ManageHeroComponent } from './manage-hero/manage-hero.component';
import { ManageBookComponent } from './manage-book/manage-book.component';


@NgModule({
  declarations: [
    BooksListComponent,
    HeroesListComponent,
    HeroDetailsComponent,
    BookDetailsComponent,
    ConfirmationModalComponent,
    ManageHeroComponent,
    ManageBookComponent
  ],
  exports: [
    BooksListComponent,
    HeroesListComponent,
    HeroDetailsComponent,
    BookDetailsComponent,
    ConfirmationModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    FontAwesomeModule
  ]
})
export class ComponentsModule { }
