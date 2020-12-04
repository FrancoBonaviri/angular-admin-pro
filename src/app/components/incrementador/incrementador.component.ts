import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {


  @Input('valor') progreso: number = 50;
  @Input() btnClass: string = 'btn btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  constructor() { }

  cambiarValor(cantidad: number) {

    cantidad = Number(cantidad);
    this.progreso = Number(this.progreso);


    if(this.progreso + cantidad >= 100 ){
      this.progreso = 100;
      this.valorSalida.emit( this.progreso );
      return;
    }

    if(this.progreso  + cantidad <= 0 ){
      this.progreso = 0;
      this.valorSalida.emit( this.progreso );
      return;
    }

    this.progreso = this.progreso + cantidad;
    this.valorSalida.emit( this.progreso );
  }


  onChange( newValor: number ) {

    if(newValor >= 100){
      this.progreso = 100;
    } else if (newValor <= 0){
      this.progreso = 0
    } else {
      this.progreso = newValor
    }


    this.valorSalida.emit( this.progreso );
  }


}
