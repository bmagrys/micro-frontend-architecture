import { Component, OnInit } from '@angular/core';
import { OrderListElementModel } from './models/order-list-element.model';
import { OrderListService } from './services/order-list.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {

  public orders: OrderListElementModel[] = [];

  constructor(private readonly orderListService: OrderListService) {
  }

  public ngOnInit() {
    this.orderListService.findOrders().subscribe(orders => this.orders = orders);
  }
}
