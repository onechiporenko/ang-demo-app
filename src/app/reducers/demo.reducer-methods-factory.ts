import { Injectable } from '@angular/core';
import { EntityCollectionReducerMethodMap, EntityDefinitionService } from '@ngrx/data';
import { DemoReducerMethods } from './demo.reducer-methods';

@Injectable()
export class DemoReducerMethodsFactory {
  constructor(private entityDefinitionService: EntityDefinitionService) {}
  /** Create the  {EntityCollectionReducerMethods} for the named entity type */
  create<T>(entityName: string): EntityCollectionReducerMethodMap<T> {
    const definition = this.entityDefinitionService.getDefinition<T>(entityName);
    const methodsClass = new DemoReducerMethods<T>(entityName, definition);
    return methodsClass.methods;
  }
}
