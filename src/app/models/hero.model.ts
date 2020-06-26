import { Book } from './book.model';

export class Hero {
  id: string;
  name: string;
  age: number;
  bio: string;
  bookIds: string[];
  books?: Book[];
}
