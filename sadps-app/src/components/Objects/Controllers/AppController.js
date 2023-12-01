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
        return [
            {
              name: "Alice Johnson",
              city: "New York",
              comment: "SADPS has been a lifesaver for me! Fast and reliable delivery service. My packages always arrive on time, and the customer service is top-notch."
            },
            {
              name: "Bob Anderson",
              city: "Los Angeles",
              comment: "I'm impressed with SADPS's efficiency. The tracking system is accurate, and I love the convenience of knowing exactly where my package is at all times. Great job!"
            },
            {
              name: "Catherine Lee",
              city: "Chicago",
              comment: "SADPS truly values its customers. The packages are handled with care, and the delivery personnel are always courteous. I highly recommend their services!"
            },
            {
              name: "David Miller",
              city: "Houston",
              comment: "Exceptional service from SADPS! They go above and beyond to ensure safe and timely deliveries. I've never had a single issue with them. Keep up the excellent work!"
            },
            {
              name: "Emily Martinez",
              city: "Miami",
              comment: "SADPS makes shipping hassle-free. Their rates are competitive, and the user-friendly website makes it easy to schedule pickups and track deliveries. Highly satisfied!"
            },
            {
              name: "Frank Taylor",
              city: "Seattle",
              comment: "I've been using SADPS for both personal and business deliveries, and they consistently exceed my expectations. Reliable, affordable, and always on time. Kudos to the SADPS team!"
            },
            {
              name: "Grace Chen",
              city: "San Francisco",
              comment: "SADPS is a game-changer in the delivery industry. The speed, accuracy, and professionalism are unmatched. I wouldn't choose any other postal service. Well done!"
            },
            {
              name: "Henry Turner",
              city: "Atlanta",
              comment: "Impressed with SADPS's commitment to environmental sustainability. Their eco-friendly packaging and green initiatives align with my values. Great service with a conscience!"
            }
          ];
    }

}


export default AppController;