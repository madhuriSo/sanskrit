import { Component, OnInit } from '@angular/core';
import {Users} from '../../model/mock_Users';
import {UserService} from './../../services/user.service';
import{UserModel} from '../../model/userModel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users=Users ;
  constructor(private UserService:UserService) { }

  ngOnInit(): void {
  }

  getUsers():void{
    this.UserService.getUsers().subscribe(users=>this.users);
    console.log(" Log:"+this.users);
  }

}
