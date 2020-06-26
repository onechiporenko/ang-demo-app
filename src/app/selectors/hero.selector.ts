import { EntitySelectorsFactory } from '@ngrx/data';
import { Hero } from '../models/hero.model';
import { createSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import { Book } from '../models/book.model';

export const heroSelectors = new EntitySelectorsFactory().create<Hero>('Hero');
export const bookSelectors = new EntitySelectorsFactory().create<Book>('Book');

export const getHeroesWithBooks =
  createSelector(heroSelectors.selectEntities, bookSelectors.selectEntityMap, (heroes: Hero[], books: Dictionary<Book>) => {
    return heroes.map(hero => {
      const heroCopy = {...hero};
      heroCopy.books = hero.bookIds.map(bookId => books[bookId]).filter(Boolean);
      return heroCopy;
    });
  });

export const getSingleHero = (id) =>
  createSelector(getHeroesWithBooks, (heroes: Hero[]) =>
    heroes.find(hero => hero.id === id) || {} as Hero);
