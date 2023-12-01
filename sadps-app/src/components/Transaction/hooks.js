import { useState } from 'react';
import { useLoadScript } from '@react-google-maps/api';

export const useTransactionDetails = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyABR1ooIS5LNeO7dOCAgBc7JnHUF8fT82g',
    });
    const [latitude] = useState(45.49717);
    const [longitude] = useState(-73.57882);
    const [transactionCost] = useState("252,193$");
    const [email] = useState("johnDoe@doe.com");
    const [disabled, setDisabled] = useState(true);
    const [firstName] = useState("John");
    const [lastName] = useState("Doe");
    const [companyName] = useState("JohnDoe Inc.");
    const [address] = useState("Boulevard De Maisonneuve Ouest");
    const [optionalAddress] = useState("Suite 701");
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
        handleUpdateClick,
        isLoaded,
        latitude,
        longitude
    };
}