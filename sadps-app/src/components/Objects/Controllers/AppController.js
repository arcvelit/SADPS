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
        this.paymentManager.execute();
    }

    sendReview() {
        this.reviewManager.execute();
    }

    getReviews() {
        return this.reviewManager.reviews;
    }

    getCSTickets() {
        return this.supportManager.tickets;
    }

    getCSFaqs() {
        return this.supportManager.faqs;
    }

    sendSupportTicket() {
        this.supportManager.execute();
    }

}


export default AppController;