import React, { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PngBooklogo } from "@assets";
// import sid01 from "../assets/sid01.jpg";
export default function Header() {
  const [isOpen, setisOpen] = useState(false);
  const cart = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  console.log("change state", isOpen);
  console.log(cart, "cart");

  function checkNavOpen() {
    if (window.innerWidth <= 800) {
      setisOpen(false);
    } else {
      setisOpen(true);
    }
  }
  useEffect(() => {
    checkNavOpen();
    window.addEventListener("resize", checkNavOpen);
  }, []);

  return (
    <>
      <div className="header__container">
        <Link to="/" className="header__container__logo">
          <img src={PngBooklogo} alt="book logo" />
        </Link>
        {isOpen ? (
          <div className="header__nav__warper">
            <NavLink
              to="/"
              className="header__nav__link"
              onClick={() => {
                if (window.innerWidth <= 800) {
                  setisOpen(false);
                }
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className="header__nav__link"
              onClick={() => {
                if (window.innerWidth <= 800) {
                  setisOpen(false);
                }
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Books
            </NavLink>
            <NavLink
              to="/aboutus"
              className="header__nav__link"
              onClick={() => {
                if (window.innerWidth <= 800) {
                  setisOpen(false);
                }
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              About Us
            </NavLink>
          </div>
        ) : null}
        <Link
          onClick={() => setisOpen(!isOpen)}
          to="/cart"
          className="header__container__menu__icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="feather feather-align-left"
          >
            <line x1="17" y1="10" x2="3" y2="10"></line>
            <line x1="21" y1="6" x2="3" y2="6"></line>
            <line x1="21" y1="14" x2="3" y2="14"></line>
            <line x1="17" y1="18" x2="3" y2="18"></line>
          </svg>
        </Link>
        <Link to="/cart" className="header__container__right__cart">
          <div className="header__container__right__cart__num">
            {Number(totalQuantity)}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="feather feather-shopping-bag"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </Link>
        {/* <div className="header__container__right">
          <ClickAwayListener
            onClickAway={() => {
              setIsCartOpen(false);
            }}
          >
            <div className="cart__sidbar__container">
              <div
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="header__container__right__cart"
              >
                <div className="header__container__right__cart__num">
                  {totalQuantity}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="feather feather-shopping-bag"
                >
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </div>
              {isCartOpen ? (
                <div className="cart__sidebar__warper">
                  <div className="cart__sidebar__warper__header">
                    <div className="cart__sidebar__heading">SHOPPING CART</div>
                    <div
                      onClick={() => setIsCartOpen(!isCartOpen)}
                      className="cart__sidebar__svg"
                    >
                      X
                    </div>
                  </div>
                  <div className="cart__sidebar__product">
                    <div className="cart__sidebar__product__img">
                      <img src="#" alt="cart" />
                    </div>
                    <div className="cart__sidebar__product__content">
                      <div className="cart__sidebar__product__name">
                        Microsoft's Surface Hub 2S
                      </div>
                      <div className="cart__sidebar__product__price">
                        $775 <span>x1</span>
                      </div>
                    </div>
                    <div className="cart__products__remove">X</div>
                  </div>
                  <div className="cart__sidebar__price__warper">
                    <div className="cart__sidebar__price__head">
                      <div className="cart__sidebar__title">Subtotal:</div>
                      <div className="cart__sidebar__price">$399</div>
                    </div>
                    <div className="cart__sidebar__price__btn">
                      <button>Checkout</button>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </ClickAwayListener>
        </div> */}
      </div>
    </>
  );
}
