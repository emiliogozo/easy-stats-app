/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Order } from '../../models/Order';
import { Customer } from '../../models/Customer';

@Injectable()
export class SDKModels {

  private models: { [name: string]: any } = {
    User: User,
    Order: Order,
    Customer: Customer,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }
}
