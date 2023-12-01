import AbstractManager from './AbstractManager';

export default class QuotationManager extends AbstractManager {

    async execute() {
        
        await new Promise((resolve) => {
            setTimeout(() => {
              resolve('Operation completed successfully!');
            }, 2000); // 2000 milliseconds or 2 seconds
          });

          
    }
    
}