import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.scss' ]
})



export class ProgressComponent {


  progreso1: number = 50;
  progreso2: number = 20;


  get getProcentaje1() {
    return `${ this.progreso1 }%`
  }

  get getProcentaje2() {
    return `${ this.progreso2 }%`
  }

  constructor() { }


}
