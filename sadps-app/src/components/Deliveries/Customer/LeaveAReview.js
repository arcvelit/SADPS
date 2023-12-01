import React, { useState } from 'react';
import './Style/Review.css'

function LeaveAReview(props)
{
  const appController = props.controller;

  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  
  const testimonials = appController.getReviews();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission, e.g., sending data to a server
    appController.sendReview();
  };

  return (
    <div className='review-container'>
      <div className='review-form-container'>
        <h3>Had a great experience? Leave a review and tell us why SADPS made your day!</h3>
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
          <button onClick={handleSubmit} type="submit">Submit Review</button>
        </form>
      </div>
      <div className='recent-reviews'>
        { 
          testimonials.map((testimonial, i) => {
            return <div className={`${i % 2 === 0 ? 'review' : 'alt-review'}`}>
              <p className='review-text'><em>{testimonial.comment}</em></p>
              <p className='reviewer'>{testimonial.name}, {testimonial.city}</p>
            </div>
          })
        }
      </div>
    </div>
  );
};

export default LeaveAReview;
