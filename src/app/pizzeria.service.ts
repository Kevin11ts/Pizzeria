import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzeriaService {

  private pedidos: Pedido[] = [];

  constructor() { }

  generarPedido(pedido: Pedido): void {
    this.pedidos.push(pedido);
  }

  getTotalPedidos(): number {
    return this.pedidos.length;
  }

  getPedidos(casa: string): Pedido[] {
    return this.pedidos.filter(pedido => pedido.casa === casa);
  }

  getPedidosTotales(): Pedido[] {
    return this.pedidos;
  }
}

export interface Pedido {
  casa: string;
  pizza: string;
}
