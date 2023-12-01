import { CreditStrategy } from '../PaymentStrategies'
import AbstractManager from './AbstractManager';

export default class PaymentManager extends AbstractManager {

    constructor() {
        super();
        this.strategy = new CreditStrategy();;
    }

    setStrategy(strategy) { this.strategy = strategy; }

    async execute() {
        console.log("Starting transaction.");
        await new Promise((resolve) => {
            setTimeout(() => {
              resolve('Operation completed successfully!');
            }, 2000); // 2000 milliseconds or 2 seconds
          });
          console.log("End of transaction.")
    }

}