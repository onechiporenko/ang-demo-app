import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';

export interface State {
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
};

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action): ActionReducer<any> => {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];
