import {
  EntityAction,
  EntityCollection,
  EntityCollectionReducerMethods,
  EntityDefinition
} from '@ngrx/data';
import { entityConfig } from '../entity-metadata';

export class DemoReducerMethods<T> extends EntityCollectionReducerMethods<T> {

  constructor(public entityName: string, public definition: EntityDefinition<T>) {
    super(entityName, definition);
  }

  protected queryManySuccess(collection: EntityCollection<T>, action: EntityAction<T[]>): EntityCollection<T> {
    const ec = super.queryManySuccess(collection, action);
    const {entityName} = collection;
    if ('additionalCollectionState' in entityConfig.entityMetadata[entityName]) {
      Object.keys(entityConfig.entityMetadata[entityName].additionalCollectionState).forEach(prop => {
        if ((action.payload as any)[prop]) {
          (ec as any)[prop] = (action.payload as any)[prop];
        }
      });
    }
    return ec;
  }
}
