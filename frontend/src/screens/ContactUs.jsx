import React from "react";

export default function ContactUs() {
  return (
    <div className="container__main">
      <div className="contact-us__container">
        <h1 className="contact-us__header">Contact Us</h1>
        <p className="contact-us__description">
          We'd love to hear from you! Whether you have a question about our
          books, services, or anything else, our team is ready to answer all
          your questions.
        </p>
        <form className="contact-us__form">
          <div className="contact-us__form-group">
            <label htmlFor="name" className="contact-us__label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="contact-us__input"
              required
            />
          </div>
          <div className="contact-us__form-group">
            <label htmlFor="email" className="contact-us__label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="contact-us__input"
              required
            />
          </div>
          <div className="contact-us__form-group">
            <label htmlFor="message" className="contact-us__label">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="contact-us__textarea"
              required
            ></textarea>
          </div>
          <button type="submit" className="contact-us__button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
