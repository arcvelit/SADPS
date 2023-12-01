import AbstractManager from './AbstractManager';

export default class SupportManager extends AbstractManager {

    constructor() {
        super();
        this.tickets = 
        [
            { subject: 'Issue with delivery', date: '2023-01-01', status: 'Answered', img: 'p'},
            { subject: 'Payment discrepancy', date: '2023-02-15', status: 'Pending', img: 'b'},
        ]
        this.faqs = 
        [
            { title: 'How to track my order?', date: '2023-03-10' },
            { title: 'Refund process', date: '2023-04-05' },
            { title: 'Shipping timeframes', date: '2023-05-15' },
            { title: 'Accepted payment methods', date: '2023-06-20' },
            { title: 'Product return policy', date: '2023-07-01' },
            { title: 'Contact customer support', date: '2023-08-10' },
            { title: 'Order cancellation procedure', date: '2023-09-15' },
            { title: 'Account password recovery', date: '2023-10-05' },
            { title: 'Troubleshooting order issues', date: '2023-11-12' },
            { title: 'Subscription management', date: '2023-12-20' },
            { title: 'Updating account information', date: '2024-01-08' },
            { title: 'Holiday season shipping', date: '2024-02-15' }
        ]
    }

    async execute() {
        console.log("Sending ticket.")
        await new Promise((resolve) => {
            setTimeout(() => {
              resolve('Operation completed successfully!');
            }, 2000); // 2000 milliseconds or 2 seconds
          });
          console.log("Ticket sent.");
    }

}