import { Routes } from '@angular/router';
import { HeroesComponent } from '../pages/heroes/heroes.component';
import { HeroComponent } from '../pages/heroes/hero/hero.component';
import { BooksComponent } from '../pages/books/books.component';
import { BookComponent } from '../pages/books/book/book.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { EditBookComponent } from '../pages/books/book/edit/edit.component';
import { CreateBookComponent } from '../pages/books/create/create.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/heroes'
  },
  {
    path: 'heroes',
    children: [
      {
        path: '',
        component: HeroesComponent
      },
      {
        path: ':id',
        component: HeroComponent
      }
    ]
  },
  {
    path: 'books',
    children: [
      {
        path: '',
        component: BooksComponent
      },
      {
        path: 'create',
        pathMatch: 'full',
        component: CreateBookComponent
      },
      {
        path: ':id',
        children: [
          {
            path: '',
            component: BookComponent
          },
          {
            path: 'edit',
            pathMatch: 'full',
            component: EditBookComponent
          }
        ]
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
