import { Component, OnInit } from '@angular/core';

export class SandhiTypes {

    swarsandhi: string;
    visargasandhi: string;
    vyanjansandhi: string;
    constructor(sw: string,vs: string,vy:string){
        this.swarsandhi=sw;
        this.visargasandhi=vs;
        this.vyanjansandhi=vy;
    }
   

}