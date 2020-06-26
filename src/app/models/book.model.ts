import { Hero } from './hero.model';

export class Book {
  id: string;
  name: string;
  description: string;
  heroIds: string[];
  heroes?: Hero[];
}
