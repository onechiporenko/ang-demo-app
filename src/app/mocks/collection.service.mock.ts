import { Observable, of } from 'rxjs';

// Simple object to mock any collection service. It doesn't do anything.
// Create your own for any specific case
export const collectionServiceStub = {
  getAll(): Observable<any> {
    return of([]);
  },
  add(): Observable<any> {
    return of({});
  },
  getByKey(): Observable<any> {
    return of({});
  },
  getWithQuery(): Observable<any> {
    return of([]);
  }
};
