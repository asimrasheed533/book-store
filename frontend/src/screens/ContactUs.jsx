import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
export default function ContactUs() {
  const form = useRef();

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid.";
    if (!formData.message) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0zupe7m", "template_qy3y3pq", form.current, {
        publicKey: "Tn2ZkiY0Ff6w-K_M8",
      })
      .then(
        () => {
          toast.success("Message sent successfully!"); // Show success toast
        },
        (error) => {
          toast.error("Failed to send message. Please try again."); // Show error toast
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="contact">
      <h1 className="contact__title">Contact Us</h1>

      <div className="contact__info">
        <p className="contact__item">Phone: +1234567890</p>
        <p className="contact__item">Email: info@yourbookstore.com</p>
        <p className="contact__item">Address: 123 Book Street, Booktown</p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contact__form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          className="contact__input"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className="contact__input"
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
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
