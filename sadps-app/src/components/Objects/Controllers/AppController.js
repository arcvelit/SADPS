import OrderManager from './OrderManager';
import PaymentManager from './PaymentManager';
import QuotationManager from './QuotationManager';
import ReviewManager from './ReviewManager';
import SupportManager from './SupportManager';
import TrackingManager from './TrackingManager';

class AppController {

    constructor() {
        this.material = 1;
        this.orderManager = new OrderManager();
        this.paymentManager = new PaymentManager();
        this.quotationManager = new QuotationManager();
        this.reviewManager = new ReviewManager();
        this.supportManager =  new SupportManager();
        this.trackingManager = new TrackingManager();
    }

    makePayment() {
        alert(1);
    }

}


export default AppController;