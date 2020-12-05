import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunction();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor( private settingService: SettingsService ) { }

  ngOnInit(): void {
    //Start the componets plugings ->
    customInitFunction();
  }

}
