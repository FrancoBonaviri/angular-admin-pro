import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo: string;
  public tituloSubs$: Subscription;

  constructor( private router: Router ) {
    //Cargo la info ->
    this.tituloSubs$ =  this.getArgumentosDeRuta().subscribe( data => {

      //Asigno la data a el titulo de el breadcrumbs ->
      this.titulo = data.titulo;

    });
  }


  ngOnDestroy(): void {
    //Limpio la subscripcion ->
    this.tituloSubs$.unsubscribe();
  }



  //Metodo que devuelve la info de la pagina desde el routerEvents
  getArgumentosDeRuta = () => {

    //Obtengo los eventos de la ruta ->
    return this.router.events.pipe(
      //Filtro los de tipo activation end ->
      filter(event => event instanceof ActivationEnd),
      //Filtro solo el hijo ->
      filter( ( event: ActivationEnd ) => event.snapshot.firstChild === null),
      //Obtengo solo la data del evento ->
      map( (event: ActivationEnd) =>  event.snapshot.data )
    );

  }

}
