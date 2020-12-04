import { Component, Input } from '@angular/core';

//Grafics libraries ->
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js'


@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent  {

  @Input() title: string = 'Grafica'

  @Input() public doughnutChartLabels: Label[] = ['Label 1', 'Label 2', 'Labesl 3'];

  @Input() public doughnutChartData: MultiDataSet = [
    [100, 100, 100],
  ];

  @Input() public colors: Color[] = [
    { backgroundColor: ['#6857E6', '#009FEE', '#F02059']}
  ]
}
