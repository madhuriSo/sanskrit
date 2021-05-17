import { Component, OnInit } from '@angular/core';
import {SandhiTypes} from './sandhiTypes';


@Component({
  selector: 'app-sandhi',
  templateUrl: './sandhi.component.html',
  styleUrls: ['./sandhi.component.css']
})
export class SandhiComponent implements OnInit {

  swarsandhi="In this section, we will go through the swarsandhi details.";
  visargasandhi="";
  vyanjansandhi="";

  sandhiTypes : SandhiTypes={
    swarsandhi:"स्वरसंधींचे एकूण आठ प्रकार आहेत "
    ,
    visargasandhi: " VisargaSandhi Details",
    vyanjansandhi:  "VyanjanSandhi Details"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
