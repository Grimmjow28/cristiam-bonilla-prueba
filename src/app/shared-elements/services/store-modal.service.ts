import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreModalService {

  _openModaL$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  _title$: BehaviorSubject<string> = new BehaviorSubject('');
  _id$: BehaviorSubject<string> = new BehaviorSubject('');
  _reloadTable$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  get openModal$() {
    return this._openModaL$.asObservable();
  }

  openModal(value: boolean) {
    this._openModaL$.next(value);
  }

  get title$() {
    return this._title$.asObservable();
  }

  title(value: string) {
    this._title$.next(value);
  }

  get id$() {
    return this._id$.asObservable();
  }

  id(value: string) {
    this._id$.next(value);
  }

  get reloadTable$() {
    return this._reloadTable$.asObservable();
  }

  reloadTable(value: boolean) {
    this._reloadTable$.next(value);
  }
}
