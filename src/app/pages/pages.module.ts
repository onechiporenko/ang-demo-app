import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditHeroComponent } from './heroes/hero/edit/edit.component';
import { EditBookComponent } from './books/book/edit/edit.component';
import { CreateHeroComponent } from './heroes/create/create.component';
import { CreateBookComponent } from './books/create/create.component';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroComponent,
    BooksComponent,
    BookComponent,
    NotFoundComponent,
    EditHeroComponent,
    EditBookComponent,
    CreateHeroComponent,
    CreateBookComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ]
})
export class PagesModule {
}
