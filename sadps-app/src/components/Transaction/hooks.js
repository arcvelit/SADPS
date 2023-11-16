import { useState } from 'react';

export const useTransactionDetails = () => {
    const [transactionCost] = useState(100);
    return {transactionCost};
}