import { EntityMetadataMap } from '@ngrx/data';
import { Hero } from './models/hero.model';

export function heroSortComparator(hero1: Hero, hero2: Hero): number {
  return hero1.name > hero2.name ? 1 : -1;
}

const entityMetadata: EntityMetadataMap = {
  Hero: {
    sortComparer: heroSortComparator
  },
  Book: {}
};

const pluralNames = {
  Hero: 'Heroes'
};

export const entityConfig = {
  entityMetadata,
  pluralNames
};
