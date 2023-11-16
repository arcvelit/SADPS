import { useState } from 'react';

export const useTransactionDetails = () => {
    const [transactionCost] = useState("252,193$");
    const [email] = useState("johnDoe@doe.com");
    return {transactionCost, email};
}