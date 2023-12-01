class PaymentStrategy {

    makeRemoteTransaction() {
        throw new Error('makeRemoteTransaction must be implemented in payment');
    }

}

export class PaypalStrategy extends PaymentStrategy {

    async makeRemoteTransaction() {
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

}

export class CryptoStrategy extends PaymentStrategy {

    async makeRemoteTransaction() {
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

}

export  class CreditStrategy extends PaymentStrategy {

    async makeRemoteTransaction() {
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

}
