import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  //Obtengo el link con la hoja de estilos del tema ->
  public linkTheme = document.querySelector('#theme');

  constructor() {

    //Cargo el tema del usuario ->
    this.loadTheme();
  }

  //Metodo que carga el tema seleccionado por el usuario ->
  loadTheme = () => {

    //Obtengo el tema seleccionado (si no existe, aplico el tema por defecto)->
    var theme = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';

    //Cargo el css en la etiqueta link del tema ->
    this.linkTheme.setAttribute('href', theme);
  }


  changeTheme = ( theme: string ) => {

    //armo la url->
    const url = `./assets/css/colors/${ theme }.css`;

    //Cambio el atributo href ->
    this.linkTheme.setAttribute('href', url);

    //Guardo el tema en el localStorage ->
    localStorage.setItem('theme', url);

    //cambio el item seleccionado ->
    this.checkCurrentTheme();
  }



  checkCurrentTheme = (): void => {

    const items = document.querySelectorAll('.selector');

    //Itero los elementos ->
    items.forEach( item => {
      item.classList.remove('working');

      //Obtengo el valor del item ->
      const btnTheme = item.getAttribute('data-theme');

      //Armo la URl para el boton ->
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`

      //Obtengo la URL del tema en uso ->
      const currentThemeUrl = this.linkTheme.getAttribute('href');

      //Si las url machean (la del item, y la del tema seleccionado), agrego el icon al item ->
      if( btnThemeUrl === currentThemeUrl ){
        item.classList.add('working')
      }
    });

  }

}
