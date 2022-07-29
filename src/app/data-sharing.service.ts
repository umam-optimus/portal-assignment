import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private title = new BehaviorSubject('Home');

  constructor() { }
 
  setTitle(title:string) {
    this.title.next(title);
  }

  getTitle(): Observable<string>{
    return this.title.asObservable(); 
  }
}
