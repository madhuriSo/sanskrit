import { Injectable } from '@angular/core';

import {Users} from './../components/user/mock_Users';
import {UserModel} from '../components/user/userModel';
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
