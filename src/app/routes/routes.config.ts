import { Routes } from '@angular/router';
import { HeroesComponent } from '../pages/heroes/heroes.component';
import { HeroComponent } from '../pages/heroes/hero/hero.component';
import { BooksComponent } from '../pages/books/books.component';
import { BookComponent } from '../pages/books/book/book.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { EditBookComponent } from '../pages/books/book/edit/edit.component';
import { EditHeroComponent } from '../pages/heroes/hero/edit/edit.component';

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
        children: [
          {
            path: '',
            component: HeroComponent
          },
          {
            path: 'edit',
            pathMatch: 'full',
            component: EditHeroComponent
          }
        ]
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
