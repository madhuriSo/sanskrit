import { Injectable } from '@angular/core';

import {Users} from './../model/mock_Users';
import {UserModel} from '../model/userModel';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers():Observable<UserModel[]>{
      return of (Users);

  }

  constructor() { }
}
