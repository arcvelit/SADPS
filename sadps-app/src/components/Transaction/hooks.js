import { useState } from 'react';

export const useTransactionDetails = () => {
    const [transactionCost] = useState("252,193$");
    const [email] = useState("johnDoe@doe.com");
    const [disabled, setDisabled] = useState(true);
    const [firstName] = useState("John");
    const [lastName] = useState("Doe");
    const [companyName] = useState("JohnDoe Inc.");
    const [address] = useState("123 Maple Street");
    const [optionalAddress] = useState("Suite 123");
    const [city] = useState("Montreal");
    const [country] = useState("Canada");
    const [state] = useState("Quebec");
    const [zipCode] = useState("A7N2C7");
    const [phone] = useState("123-456-7890");

    const handleUpdateClick = () => {
        setDisabled(!disabled);
    }

    return {
        transactionCost, 
        email, 
        firstName, 
        lastName, 
        companyName, 
        address, 
        optionalAddress,
        city,
        country,
        state,
        zipCode,
        phone,
        disabled,
        setDisabled,
        handleUpdateClick
    };
}