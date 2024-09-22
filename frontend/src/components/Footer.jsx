import { PngBooklogo } from "@assets";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__content__col">
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__logo"
          >
            <img src={PngBooklogo} alt="logo" />
          </Link>
          <div className="footer__content__col__info">
            Books are the Major Part of Our socitey!
            it Build the Future of Our generation.
            We servive some field's of life with Education
            Man is a social Animal so books make's us a Real Human!
            (LAIBRARINE)
          </div>
        </div>
        <div className="footer__content__col">
          <div className="footer__content__col__heading">Quick links</div>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__link"
          >
            Home
          </Link>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__link"
          >
            Books
          </Link>

          <Link
            to="/products"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__link"
          >
            About Us
          </Link>

          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__link"
          >
            Contact Us
          </Link>
        </div>

        <div className="footer__content__col">
          <div className="footer__content__col__heading">Social Info</div>
          <div className="footer__content__col__info">+92 03035232462</div>
          <div className="footer__content__col__info">BooksStore@gmail.com</div>
          <div className="footer__content__col__info">www.Libarary.com</div>
          
        </div>
      </div>
    </div>
  );
}
