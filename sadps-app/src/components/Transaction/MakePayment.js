import React, { useState } from 'react';
import './Style/Payment.css';
import logo from '../Home/Style/SADPS-LOGO-so-smoll.png';
import Modal from 'react-modal'; // Import the Modal component
import {CreditStrategy, CryptoStrategy, PaypalStrategy} from '../Objects/PaymentStrategies';


const MakePayment = (props) => {

  const appController = props.controller;

  appController.makePayment();

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [name, setName] = useState('');
  const [isProcessing, setProcessing] = useState(false);
  const [paypalProcessing, setPaypalProcessing] = useState(false);
  const [cryptoProcessing, setCryptoProcessing] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false); // State for modal visibility



  // Placeholder for transaction summary with random values
  const transactionSummary = {
    totalAmount: 50.00,
    discount: 10.00,
    shippingFee: 5.00,
    finalTotal: 45.00
  };

  const closeModal = () => {
    setModalOpen(false);

  }

  const handleCrypto = () => {
    setCryptoProcessing(true);
    handlePayment();
  }

  const handlePaypal = () => {
    setPaypalProcessing(true);
    handlePayment();
  }

  const handlePayment = async () => {
    // Simulate a payment processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    // open modal
    setModalOpen(true);
    setPaypalProcessing(false);
    setCryptoProcessing(false);
    setProcessing(false);

  };

  const handleConfirm = () => {
    setProcessing(true);
    handlePayment()
  }


  return (
    <div className="outer-container">
      <h2>Make Payment</h2>

      <div className="payment-container">
        <div className="split-container">
          <div className="left-container">
            <div className="payment-form">
              <div className="input-container">
                <label>Card Number:</label>
                <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
              </div>
              <div className="input-container">
                <label>Expiry Date:</label>
                <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
              </div>
              <div className="input-container">
                <label>CVC:</label>
                <input type="text" value={cvc} onChange={(e) => setCvc(e.target.value)} />
              </div>
              <div className="input-container">
                <label>Name on Card:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className='payment-btn-container'>
              <button onClick={handleConfirm} disabled={isProcessing}>
              {isProcessing ? 'Processing...' : 'Make Payment'}
              </button>
              <button onClick={handlePaypal} className='paypal-button'>
              {paypalProcessing ? 'Redirecting...' : 'Checkout with PayPal'}
              </button>
              <button onClick={handleCrypto} className='crypto-button'>
              {cryptoProcessing ? 'Redirecting...' : 'Access crypto wallet'}
              </button>
              </div>
            </div>
          </div>
          <div className="right-container">
            {/* Transaction Summary */}
            <div className="transaction-summary">
              <h2>Transaction Summary</h2>
              <p>Total Amount: ${transactionSummary.totalAmount}</p>
              <p>Discount: -${transactionSummary.discount}</p>
              <p>Shipping Fee: ${transactionSummary.shippingFee}</p>
              <hr />
              <p>Final Total: ${transactionSummary.finalTotal}</p>
            </div>

            {/* Image Container */}
          
              <img src={logo} alt="LOGO" />
          </div>
        </div>
      </div>
      <Modal
      className='react-modal'
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Payment Successful Modal"
        >
          <h2>Payment Successful!</h2>
          <p>Your payment was successful. Thank you!</p>
          <button onClick={closeModal}>Close</button>
        </Modal>
    </div>
  );
};

export default MakePayment;
