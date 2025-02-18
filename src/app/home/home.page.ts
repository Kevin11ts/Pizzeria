import { Component } from '@angular/core';
import { PizzeriaService } from '../pizzeria.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  totalPedidos: number = 0;

  constructor(private pizzeria: PizzeriaService) {}

  ngOnInit() {
    console.log('Home: OnInit');
  }
  ionViewWillEnter() {
    console.log('Home: ionViewWillEnter');
    this.totalPedidos
     = this.pizzeria.getTotalPedidos();
  }

  ionViewDidEnter() {
    console.log('Home: ionViewDidEnter');
  }
  
  ionViewWillLeave() {
    console.log('Home: ionViewWillLeave');
  }
  ionViewDidLeave() {
    console.log('Home: ionViewDidLeave');
  }
  ngOnDestry() {
    console.log('Homa: OnDestroy');
  }
}
