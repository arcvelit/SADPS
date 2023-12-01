import AbstractManager from './AbstractManager';

export default class QuotationManager extends AbstractManager {

    async execute() {
        
        console.log("Sending quotation.");
        await new Promise((resolve) => {
            setTimeout(() => {
              resolve('Operation completed successfully!');
            }, 2000); // 2000 milliseconds or 2 seconds
          });

        console.log("Quotation received.");



    }
    
}