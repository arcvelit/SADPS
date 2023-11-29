// ContactSupport.js
import React, { useState } from 'react';
import './ContactSupport.css';
import parcel from '../Transaction/stockparcel.png';
import muney from './Style/transaction-logo.svg'


const ContactSupport = () => {
  // Sample data for previous tickets and FAQs
  const [sampleTickets, setSampleTickets] = useState([
    { subject: 'Issue with delivery', date: '2023-01-01', status: 'Answered', img: parcel},
    { subject: 'Payment discrepancy', date: '2023-02-15', status: 'Pending', img: muney},
    // Add more sample tickets as needed
  ]);

  const handleNewTicketClick = () => {

  }
  const handleTicketClick = () => {

  }

  const [faqs, setFaqs] = useState([
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
    // Add more FAQs as needed
  ]);

  // New ticket form state
  const [newTicket, setNewTicket] = useState({
    deliveryNumber: '',
    issueType: 'Logistics',
    subject: '',
    message: '',
  });

  const handleNewTicketChange = (e) => {
    const { name, value } = e.target;
    setNewTicket((prevTicket) => ({ ...prevTicket, [name]: value }));
  };

  const handleNewTicketSubmit = (e) => {
    e.preventDefault();
    // Perform submit logic (e.g., send the ticket to the server)
    console.log('Submitting new ticket:', newTicket);
    // Reset the form after submission
    setNewTicket({
      deliveryNumber: '',
      issueType: 'Logistics',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="contact-support-container">
      <div className="left-pane">
        <h3>My Previous Tickets</h3>
        <ul>
          {sampleTickets.map((ticket) => (
            <li key={ticket.id} onClick={() => handleTicketClick(ticket)}>
              <div className="ticket-card">
                <div className='card-info'>
                <p><b>Subject:</b> {ticket.subject}</p>
                <p><b>Date:</b> {ticket.date}</p>
                <p><b>Status:</b> {ticket.status}</p>
                </div>
                <div className='card-logo'>
                <img className="ticket-logo" src={ticket.img} alt="Parcel Logo" />

                </div>
              </div>


            </li>


          ))}

        </ul>
      </div>

      {/* Middle pane - Write a new ticket */}
      <div className="middle-pane">
        <h2>Write a New Ticket</h2>
        <form onSubmit={handleNewTicketSubmit}>
          <label>
            Delivery Number:
            <input
              type="text"
              name="deliveryNumber"
              value={newTicket.deliveryNumber}
              onChange={handleNewTicketChange}
            />
          </label>
          <label>
            Issue Type:
            <select name="issueType" value={newTicket.issueType} onChange={handleNewTicketChange}>
              <option value="Logistics">Logistics</option>
              <option value="Transactional">Transactional</option>
              <option value="Report">Report</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label>
            Subject:
            <input
              type="text"
              name="subject"
              value={newTicket.subject}
              onChange={handleNewTicketChange}
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={newTicket.message}
              onChange={handleNewTicketChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Rightmost pane - Frequently Asked Questions */}
      <div className="right-pane">
        <h2>Frequently Asked Questions</h2>
        <ul>
          {faqs.map((faq, index) => (
            <li key={index}>
              <strong>{faq.title}</strong> ({faq.date})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactSupport;
