import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styleUrls: ['./chapter-detail.component.css']
})
export class ChapterDetailComponent implements OnInit {

   flag=false;
  colorTest="blue";
  colors=["blue","red","green","pink"];
  constructor() { }

  ngOnInit(): void {
  }

}
