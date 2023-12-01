class AppController {

    constructor() {
        this.orderManager = new OrderManager();
        this.paymentManager = new PaymentManager();
        this.quotationManager = new QuotationManager();
        this.reviewManager = new ReviewManager();
        this.supportManager =  new SupportManager();
        this.trackingManager = new TrackingManager();
    }

}

export default AppController;