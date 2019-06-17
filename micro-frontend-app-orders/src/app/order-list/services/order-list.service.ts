import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OrderListElementModel } from '../models/order-list-element.model';

@Injectable()
export class OrderListService {
  private orders: OrderListElementModel[] = [
    {
      date: '2019-06-16',
      id: 'e074dd59-6f6a-441f-858e-b1422d21124d',
      status: 'Confirmed',
      amount: '28.34',
    },
    {
      date: '2019-06-15',
      id: '20cd22ba-97f0-4650-8d94-dbab7667c37a',
      status: 'Confirmed',
      amount: '131.99',
    },
    {
      date: '2019-06-10',
      id: 'e08dfb85-daa0-41de-8da3-c3f07f48318a',
      status: 'On hold',
      amount: '53.00',
    },
    {
      date: '2019-05-29',
      id: '6f53df52-c250-40b6-b11f-2101902cf9fc',
      status: 'Closed',
      amount: '2.99',
    },
    {
      date: '2019-05-28',
      id: 'fb40d7f8-2d9a-46ac-884b-5e215ca2c985',
      status: 'Closed',
      amount: '7.99',
    },
  ] as OrderListElementModel[];

  public findOrders(): Observable<OrderListElementModel[]> {
    return of(this.orders);
  }
}
