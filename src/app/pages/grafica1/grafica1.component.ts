import { Component  } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  title1: string = 'Ventas';

  public Labels1: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

  public Data1: MultiDataSet = [
    [350, 450, 100],
  ];

  public colors1: Color[] = [
    { backgroundColor: ['#6857E6', '#009FEE', '#F02059']}
  ]



  title2: string = 'Compras';

  public Labels2: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

  public Data2: MultiDataSet = [
    [260, 123, 45],
  ];

  public colors2: Color[] = [
    { backgroundColor: ['#FDBFB2', '#E1396C', '#96D38D']}
  ]



  title3: string = 'Ganancias';

  public Labels3: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

  public Data3: MultiDataSet = [
    [125, 463, 25],
  ];

  public colors3: Color[] = [
    { backgroundColor: ['#3A4750', '#D3D6DB', '#BE3046']}
  ]


}




