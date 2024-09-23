import React from "react";

export default function ContactUs() {
  return (
    <div className="contact">
      <h1 className="contact__title">Contact Us</h1>

      <div className="contact__info">
        <p className="contact__item">Phone: +1234567890</p>
        <p className="contact__item">Email: info@yourbookstore.com</p>
        <p className="contact__item">Address: 123 Book Street, Booktown</p>
      </div>

      <form className="contact__form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" className="contact__input" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" className="contact__input" required />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          className="contact__textarea"
          required
        ></textarea>

        <button type="submit" className="contact__button">
          Send Message
        </button>
      </form>

      <div className="contact__social">
        <h2>Follow Us</h2>
        <a
          href="https://facebook.com/yourbookstore"
          className="contact__social-link"
        >
          Facebook
        </a>
        <a
          href="https://twitter.com/yourbookstore"
          className="contact__social-link"
        >
          Twitter
        </a>
        <a
          href="https://instagram.com/yourbookstore"
          className="contact__social-link"
        >
          Instagram
        </a>
      </div>

      <div className="contact__faq">
        <h2>Frequently Asked Questions</h2>
        <div className="contact__faq-item">
          <h3>How can I place an order?</h3>
          <p>
            You can place an order through our website by adding books to the
            cart and proceeding to checkout.
          </p>
        </div>
      </div>

      <div className="contact__hours">
        <h2>Working Hours</h2>
        <p>Monday to Friday: 9 AM - 5 PM</p>
        <p>Saturday: 10 AM - 2 PM</p>
      </div>
    </div>
  );
}
