import { DefaultPersistenceResultHandler, EntityAction } from '@ngrx/data';
import { Action } from '@ngrx/store';
import { entityConfig } from '../entity-metadata';
import { Injectable } from '@angular/core';

@Injectable()
export class DemoPersistenceResultHandler extends DefaultPersistenceResultHandler {
  handleSuccess(originalAction: EntityAction): (data: any) => Action {
    const actionHandler = super.handleSuccess(originalAction);
    return function(data: any): Action {
      const action = actionHandler.call(this, data);
      const entityName = originalAction.payload.entityName;
      if ('additionalCollectionState' in entityConfig.entityMetadata[entityName]) {
        Object.keys(entityConfig.entityMetadata[entityName].additionalCollectionState).forEach(prop => {
          if (action && data && prop in data) {
            (action as any).payload[prop] = data[prop];
          }
        });
        (action as any).payload.data = data.entities || data;
      }
      return action;
    };
  }
}
