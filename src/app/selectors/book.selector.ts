import { EntitySelectorsFactory } from '@ngrx/data';
import { Hero } from '../models/hero.model';
import { createSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import { Book } from '../models/book.model';

export const heroSelectors = new EntitySelectorsFactory().create<Hero>('Hero');
export const bookSelectors = new EntitySelectorsFactory().create<Book>('Book');

export const getBooksWithHeroes =
  createSelector(bookSelectors.selectEntities, heroSelectors.selectEntityMap, (books: Book[], heroes: Dictionary<Hero>) => {
    return books.map(book => {
      const bookCopy = {...book};
      bookCopy.heroes = book.heroIds.map(heroId => heroes[heroId]).filter(Boolean);
      return bookCopy;
    });
  });

export const getSingleBook = (id) =>
  createSelector(getBooksWithHeroes, (books: Book[]) =>
    books.find(book => book.id === id) || {} as Book);
