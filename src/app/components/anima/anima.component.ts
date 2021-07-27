import { Component, OnInit } from '@angular/core';
import {trigger,state,style,animate,transition } from '@angular/animations';
@Component({
  selector: 'app-anima',
  templateUrl: './anima.component.html',
  styleUrls: ['./anima.component.css'],
  animations:[
    trigger('anim',[
      state('open',style({
        height:'200px',
        opacity:1,
        backgroundColor:'yellow'
      })),
      state('closed',style({
        height:'100px',
        opacity:0.5,
        backgroundColor:'green'
      })),
      transition('open=>closed',[
        animate('1s')
      ]),
      transition('closed =>open',[
        animate('2s')
      ])
    
    ])
  ]
})
export class AnimaComponent implements OnInit {

  isOpen=true;
  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    this.isOpen=!this.isOpen;
  }

}
