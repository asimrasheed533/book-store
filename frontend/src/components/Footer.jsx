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
            Fundamental Textile ensures ready-to-wear clothing and uniforms for
            industrial clothing, healthcare, uniforms and casual fast-fashion
            products. You just have to book an order and rest will be taken care
            by our teams.
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
            About
          </Link>

          <Link
            to="/products"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__link"
          >
            Services
          </Link>

          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__link"
          >
            Quotation
          </Link>
        </div>

        <div className="footer__content__col">
          <div className="footer__content__col__heading">Social info</div>
          <div className="footer__content__col__info">+32 434 54554543</div>
          <div className="footer__content__col__info">BooksStore@gmail.com</div>
          <div className="footer__content__col__info">www.fustion.com</div>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__button"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
