import { Component, OnInit } from '@angular/core';
import { Pedido, PizzeriaService } from '../pizzeria.service';

@Component({
  selector: 'app-ravenclaw',
  templateUrl: './ravenclaw.page.html',
  styleUrls: ['./ravenclaw.page.scss'],
  standalone: false,
})
export class RavenclawPage implements OnInit {

  pizzaSeleccionada: string = '';
  pedidos: Pedido[] = [];

  constructor(private pizzeria: PizzeriaService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.pedidos = this.pizzeria.getPedidos('Ravenclaw');
  }

  generarPedido(casa: string, pizza: string): void {
    if (pizza) {
      this.pizzeria.generarPedido({ casa, pizza });
      this.pedidos = this.pizzeria.getPedidos('Ravenclaw'); // Filtra por casa
    }
  }
}
