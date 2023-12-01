import React, { useState } from 'react';
import './Style/ContactSupport.css';
import parcel from '../Transaction/stockparcel.png';
import muney from './Style/transaction-logo.svg'


const ContactSupport = (props) => {

  const appController = props.controller;
  
  const tickets = appController.getCSTickets();
  const faqs = appController.getCSFaqs();

  const handleNewTicketClick = () => {

  }
  const handleTicketClick = () => {

  }

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
    appController.sendSupportTicket();
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
          {tickets.map((ticket) => ( 
            <li key={ticket.id} onClick={() => handleTicketClick(ticket)}>
              
              <div className="ticket-card">
                <div className='card-info'>
                <p><b>Subject:</b> {ticket.subject}</p>
                <p><b>Date:</b> {ticket.date}</p>
                <p><b>Status:</b> {ticket.status}</p>
                </div>
                <div className='card-logo'>
                <img className="ticket-logo" src={ ticket.img == "p" ? parcel:muney}
           alt=" Logo" />

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
