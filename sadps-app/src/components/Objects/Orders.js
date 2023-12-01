export class Order {
    constructor(date, status, items, id, type, customer) {
      this.date = date;
      this.status = status;
      this.items = items;
      this.id = id;
      this.type = type;
      this.customer = customer;
    }
  }
  
  export class Delivery extends Order {
    constructor(date, status, items, id, customer, estimatedDelivery) {
      super(date, status, items, id, 'delivery', customer);
      this.estimatedDelivery = estimatedDelivery || '';
    }
  }
  
  export class Refund extends Order {
    constructor(date, status, items, id, customer, expectedDelivery) {
      super(date, status, items, id, 'refund', customer);
      this.expectedDelivery = expectedDelivery || '';
    }
  }
  
  export class OrderFactory {
    static createDelivery(deliveryDetails) {
      const { date, status, items, id, customer, estimatedDelivery } = deliveryDetails;
      return new Delivery(date, status, items, id, customer, estimatedDelivery);
    }
  
    static createRefund(refundDetails) {
      const { date, status, items, id, customer, expectedDelivery } = refundDetails;
      return new Refund(date, status, items, id, customer, expectedDelivery);
    }
  
    static createDefaultOrder(orderDetails) {
      const { date, status, items, id, customer } = orderDetails;
      return new Order(date, status, items, id, 'default', customer);
    }
  }
  
