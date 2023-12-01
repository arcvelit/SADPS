import React, { useState } from 'react';
import './Style/Review.css'

function LeaveAReview()
{
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const testimonials = [
    {
      name: "Alice Johnson",
      city: "New York",
      comment: "SADPS has been a lifesaver for me! Fast and reliable delivery service. My packages always arrive on time, and the customer service is top-notch."
    },
    {
      name: "Bob Anderson",
      city: "Los Angeles",
      comment: "I'm impressed with SADPS's efficiency. The tracking system is accurate, and I love the convenience of knowing exactly where my package is at all times. Great job!"
    },
    {
      name: "Catherine Lee",
      city: "Chicago",
      comment: "SADPS truly values its customers. The packages are handled with care, and the delivery personnel are always courteous. I highly recommend their services!"
    },
    {
      name: "David Miller",
      city: "Houston",
      comment: "Exceptional service from SADPS! They go above and beyond to ensure safe and timely deliveries. I've never had a single issue with them. Keep up the excellent work!"
    },
    {
      name: "Emily Martinez",
      city: "Miami",
      comment: "SADPS makes shipping hassle-free. Their rates are competitive, and the user-friendly website makes it easy to schedule pickups and track deliveries. Highly satisfied!"
    },
    {
      name: "Frank Taylor",
      city: "Seattle",
      comment: "I've been using SADPS for both personal and business deliveries, and they consistently exceed my expectations. Reliable, affordable, and always on time. Kudos to the SADPS team!"
    },
    {
      name: "Grace Chen",
      city: "San Francisco",
      comment: "SADPS has made my online shopping experience much better. Quick deliveries and excellent communication. I appreciate the dedication to customer satisfaction!"
    },
    {
      name: "Henry Turner",
      city: "Atlanta",
      comment: "Impressed with SADPS's commitment to environmental sustainability. Their eco-friendly packaging and green initiatives align with my values. Great service with a conscience!"
    },
    {
      name: "Isabel Rodriguez",
      city: "Dallas",
      comment: "SADPS has earned my trust with their consistent, reliable service. I can always rely on them to deliver my packages securely and on time. Highly recommended!"
    },
    {
      name: "Jack Thompson",
      city: "Denver",
      comment: "SADPS is a game-changer in the delivery industry. The speed, accuracy, and professionalism are unmatched. I wouldn't choose any other postal service. Well done!"
    },
    {
      name: "Olivia Tremblay",
      city: "Montreal",
      comment: "SADPS has been a reliable partner for my business. Quick deliveries and a seamless tracking system. I appreciate the convenience they bring to my shipping needs."
    },
    {
      name: "Ethan Singh",
      city: "Toronto",
      comment: "Living in a bustling city like Toronto, I need a delivery service I can count on. SADPS has consistently delivered my packages on time, making my life much easier."
    },
    {
      name: "Sophie Chen",
      city: "Vancouver",
      comment: "As a frequent online shopper, SADPS has become my go-to for shipping. The rates are reasonable, and the parcels arrive in perfect condition. Vancouver loves SADPS!"
    },
    {
      name: "Liam MacKenzie",
      city: "Calgary",
      comment: "SADPS provides a level of service that sets them apart. Courteous staff and a commitment to timely deliveries make them the best choice for anyone in Calgary. Highly recommended!"
    },
    {
      name: "Nathan Tremblay",
      city: "Quebec City",
      comment: "SADPS has proven to be the perfect choice for shipping to Quebec City. The packages always arrive in pristine condition, and the delivery times are impressive. A reliable service indeed!"
    },
    {
      name: "Zoe Li",
      city: "Edmonton",
      comment: "Living in Edmonton, it's crucial to have a delivery service that can handle the diverse weather conditions. SADPS has consistently delivered, rain or shine. I'm a happy and loyal customer!"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission, e.g., sending data to a server
    console.log('Form submitted:', { email, title, review, deliveryNumber });
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
          <button type="submit">Submit Review</button>
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
