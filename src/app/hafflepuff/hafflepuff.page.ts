import { Component, OnInit } from '@angular/core';
import { Pedido, PizzeriaService } from '../pizzeria.service';

@Component({
  selector: 'app-hafflepuff',
  templateUrl: './hafflepuff.page.html',
  styleUrls: ['./hafflepuff.page.scss'],
  standalone: false,
})
export class HafflepuffPage implements OnInit {
 pizzaSeleccionada: string = '';
  pedidos: Pedido[] = [];

  constructor(private pizzeria: PizzeriaService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.pedidos = this.pizzeria.getPedidos('Hafflepuff');
  }

  generarPedido(casa: string, pizza: string): void {
    if (pizza) {
      this.pizzeria.generarPedido({ casa, pizza });
      this.pedidos = this.pizzeria.getPedidos('Hafflepuff'); // Filtra por casa
    }
  }
}
