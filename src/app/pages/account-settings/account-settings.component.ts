import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor( private settingService: SettingsService) { }

  ngOnInit(): void {
    //Seteo el item seleccionado correspondiente al tema ->
    this.settingService.checkCurrentTheme();
  }


  changeTheme( theme: string ) {
    //cambio el tema ->
    this.settingService.changeTheme( theme );
  }



}
