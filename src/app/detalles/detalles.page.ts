import { Component, OnInit } from '@angular/core';
import { Pedido, PizzeriaService } from '../pizzeria.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
  standalone: false
})
export class DetallesPage implements OnInit {
  pedidos: Pedido[] = [];

  constructor(private pizzeria: PizzeriaService) { }

  ngOnInit() {
    this.pedidos = this.pizzeria.getPedidosTotales();
  }
}