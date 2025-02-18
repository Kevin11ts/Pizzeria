import { Component, OnInit } from '@angular/core';
import { Pedido, PizzeriaService } from '../pizzeria.service';

@Component({
  selector: 'app-slytherin',
  templateUrl: './slytherin.page.html',
  styleUrls: ['./slytherin.page.scss'],
  standalone: false,
})
export class SlytherinPage implements OnInit {

  pizzaSeleccionada: string = '';
  pedidos: Pedido[] = [];

  constructor(private pizzeria: PizzeriaService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.pedidos = this.pizzeria.getPedidos('Slytherin');
  }

  generarPedido(casa: string, pizza: string): void {
    if (pizza) {
      this.pizzeria.generarPedido({ casa, pizza });
      this.pedidos = this.pizzeria.getPedidos('Slytherin'); // Filtra por casa
    }
  }
}
