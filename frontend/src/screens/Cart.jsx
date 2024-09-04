import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeToCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";
export default function Cart() {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart.items);
 
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  

  return (
    <>
      <div className="cart__heading">BOOKS STORE</div>
      {cart.length === 0 ? (
        <div className="cart__empty">Your cart is empty.</div>
      ) : (
        <>
          <div className="cart__container">
            <div className="cart__container__left">
              {cart.map((i) => (
                <CartItem cart={i} />
              ))}
            </div>
            <div className="cart__container__right">
              <div className="cart__container__text">
                Order special instructions PLEASE LEAVE SPECIAL INSTRUCTIONS
                ABOVE
              </div>

              <div className="sub__total__subheaidng">
                Taxes and shipping calculated at checkout
              </div>
              <Link to="/" className="sub__total__btn">
                Add More Books
              </Link>
              <Link
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                to="/checkout"
                className="sub__total__btn__checkout"
              >
                reserve
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

function CartItem({ cart }) {
  const dispatch = useDispatch();
  return (
    <div className="cart__container__left__item">
      <div className="cart__container__left__item__col">
        <div className="cart__container__left__col__img">
          <img src={cart.img} alt="cart" />
        </div>
        <div className="cart__container__left__col__content">
          <div className="cart__container__left__name__warper">
            <div className="cart__container__left__col__name">{cart.name}</div>
          </div>

          <div className="cart__item__price">
            <div className="cart__item__Heading">Author</div>
            <div className="cart__item__total__price">{cart.author}</div>
          </div>
          <div className="cart__item__price">
            <div className="cart__item__Heading">Item Quantity</div>
            <div className="cart__item__total__price">{cart.quantity}</div>
          </div>
        </div>
      </div>
      <div className="cart__container__left__item__col">
        <div
          onClick={() => dispatch(removeToCart(cart))}
          className="trach__item"
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
            class="feather feather-trash-2"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </div>
      </div>
    </div>
  );
}
