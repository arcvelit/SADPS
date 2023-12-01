import { CreditStrategy } from '../PaymentStrategies'
import AbstractManager from './AbstractManager';

export default class PaymentManager extends AbstractManager {

    constructor(strategy = null) {
        super();
        if (strategy === null)
            this.strategy = new CreditStrategy();
        this.strategy = strategy;
    }

    setStrategy(strategy) { this.strategy = strategy; }

    execute() {

    }

}