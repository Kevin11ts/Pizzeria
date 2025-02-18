import { Component, OnInit } from '@angular/core';
import { Pedido, PizzeriaService } from '../pizzeria.service';

@Component({
  selector: 'app-gryffinder',
  templateUrl: './gryffinder.page.html',
  styleUrls: ['./gryffinder.page.scss'],
  standalone: false,
})
export class GryffinderPage implements OnInit {

  pizzaSeleccionada: string = '';
  pedidos: Pedido[] = [];

  constructor(private pizzeria: PizzeriaService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.pedidos = this.pizzeria.getPedidos('Gryffinder');
  }

  generarPedido(casa: string, pizza: string): void {
    if (pizza) {
      this.pizzeria.generarPedido({ casa, pizza });
      this.pedidos = this.pizzeria.getPedidos('Gryffinder'); // Filtra por casa
    }
  }
}
