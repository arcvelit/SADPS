import AbstractManager from './AbstractManager';
import { OrderFactory } from '../Orders'

export default class OrderManager extends AbstractManager {
    constructor() {
        super();

        this.orders = [];
    }

    async execute() {
        console.log("Sending remote order.");

        const defaultParams = {
            date:'', 
            status: '', 
            items:["item1", "item2", "item3"], 
            id:9, 
            customer:"", 
            estimatedDelivery:""
        };

        this.orders.push(OrderFactory.createDelivery(defaultParams));
        await new Promise((resolve) => {
            setTimeout(() => {
              resolve('Operation completed successfully!');
            }, 2000); // 2000 milliseconds or 2 seconds
          });
          console.log("Order sent.")
    }
    
}