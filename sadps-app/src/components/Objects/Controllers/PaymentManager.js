import CreditStrategy from '../PaymentStrategies'

class PaymentManager extends AbstractManager {

    constructor(strategy = null) {
        if (strategy === null)
            this.strategy = new CreditStrategy();
        this.strategy = strategy;
    }

    setStrategy(strategy) { this.strategy = strategy; }

    execute() {

    }

}