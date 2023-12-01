import AbstractManager from './AbstractManager';

export default class TrackingManager extends AbstractManager {

    constructor() {
        super();

        this.sessions = 
        [
            { trackingNumber: 'SADPS-123', status: 'Delivered', location: 'New York, NY', lat: 40.74843, lng: -73.98565, pickupDate: '2022-02-15', transitStatus: '2022-02-16', deliveryDate: '2022-02-20' },
            { trackingNumber: 'SADPS-456', status: 'In Transit', location: 'Montreal, QC', lat: 45.49717, lng: -73.57882, pickupDate: '2019-02-15', transitStatus: 'Expected arrival on 2019-02-16', deliveryDate: 'Expected delivery on 2019-02-20' },
            { trackingNumber: 'SADPS-789', status: 'Delivered', location: 'Chicago, IL', lat: 41.87887, lng: -87.63591, pickupDate: '2023-11-15', transitStatus: '2023-11-16', deliveryDate: '2023-12-20' },
            { trackingNumber: 'SADPS-450', status: 'Delivered', location: 'Laval, QC', lat: 45.57146, lng: -73.75439, pickupDate: '2023-02-15', transitStatus: '2023-02-16', deliveryDate: '2023-02-20' },
            { trackingNumber: 'SADPS-111', status: 'In Transit', location: 'Los Angeles, CA', lat: 34.05223, lng: -118.24368, pickupDate: '2023-09-15', transitStatus: 'Expected arrival on 2023-09-16', deliveryDate: 'Expected delivery on 2023-09-20' },
            { trackingNumber: 'SADPS-222', status: 'Out for Delivery', location: 'Miami, FL', lat: 25.76168, lng: -80.19179, pickupDate: '2022-08-15', transitStatus: '2022-08-16', deliveryDate: 'Expected delivery today' },
            { trackingNumber: 'SADPS-333', status: 'In Transit', location: 'Seattle, WA', lat: 47.60621, lng: -122.33207, pickupDate: '2021-05-15', transitStatus: 'Expected arrival on 2021-05-16', deliveryDate: 'Expected delivery on 2021-05-20' },
            { trackingNumber: 'SADPS-444', status: 'Delivered', location: 'Toronto, ON', lat: 43.65322, lng: -79.38318, pickupDate: '2022-12-15', transitStatus: '2022-12-16', deliveryDate: '2022-12-20' },
            { trackingNumber: 'SADPS-555', status: 'In Transit', location: 'Houston, TX', lat: 29.76043, lng: -95.36980, pickupDate: '2023-04-15', transitStatus: 'Expected arrival on 2023-04-16', deliveryDate: 'Expected delivery on 2023-04-20' }
        ];
          
    }

    async execute() {

        console.log("Fetching tracking info.")
        await new Promise((resolve) => {
            setTimeout(() => {
              resolve('Operation completed successfully!');
            }, 2000); // 2000 milliseconds or 2 seconds
          });
        console.log("Fetched tracking info.")
    }
    
}