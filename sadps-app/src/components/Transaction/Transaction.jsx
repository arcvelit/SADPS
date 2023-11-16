import React from 'react';
import './Transaction.css';
import { useTransactionDetails } from './hooks';

const Transaction = () => {
    const {transactionCost} = useTransactionDetails();

    /*
        Page that shows the subtotal of the transaction (can be fake numbers) and every essential 
        info like shipping address, is it a delivery or refund, what method of delivery was selected;
        each of them with « change » buttons (that don’t need to be implemented)
    */
    return (
        <div>
            Cost of delivery is: {transactionCost}$
        </div>
    );
}

export default Transaction;