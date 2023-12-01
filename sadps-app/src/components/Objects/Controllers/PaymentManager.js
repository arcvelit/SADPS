import CreditStrategy from '../PaymentStrategies/CreditStrategy'

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