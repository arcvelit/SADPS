import React, { useState } from 'react';
import './Style/Review.css'

function LeaveAReview()
{
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission, e.g., sending data to a server
    console.log('Form submitted:', { email, title, review, deliveryNumber });
  };

  return (
    <div className='review-container'>
    <form className='review-form' onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Title of Review:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Review:
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Delivery Number:
        <input
          type="text"
          value={deliveryNumber}
          onChange={(e) => setDeliveryNumber(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit Review</button>
    </form>
    </div>
  );
};

export default LeaveAReview;
