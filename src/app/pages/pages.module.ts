import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditBookComponent } from './books/book/edit/edit.component';
import { CreateBookComponent } from './books/create/create.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroComponent,
    BooksComponent,
    BookComponent,
    NotFoundComponent,
    EditBookComponent,
    CreateBookComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    FontAwesomeModule
  ]
})
export class PagesModule {
}
