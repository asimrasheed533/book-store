import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
export default function Detail() {
  const { state } = useLocation();
  console.log(state);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  if (!state) {
    return <div>No product details available</div>;
  }
  return (
    <>
      <div className="book__detail__heading">Book Details</div>
      <div className="detial__container">
        <div className="detial__container__col">
          <div className="detial__container__col__main__img__warper">
            <img
              className="detial__container__col__main__image"
              src={state.img}
              alt="product book"
            />
          </div>
        </div>

        <div className="detial__container__col">
          <div className="detial__container__name">{state.title}</div>
          <div className="detial__price__entry">
            <span>Author:</span> Demo Jhon
          </div>

          <button
            onClick={() => {
              const productExist = cartItems.some(
                (item) => item.id === state.id
              );
              if (productExist) {
                alert("Product already added to cart");
                return;
              }
              dispatch(
                addToCart({
                  id: state.id,
                  img: state.image,
                  name: state.title,
                })
              );
            }}
            className="add__cart__btn"
          >
            Reserving Book
          </button>
          <div className="disclaimer__title">Book Deatils</div>
          <div className="disclaimer__detail">
            Actual colors of the product may vary from the colors being
            displayed on your device.olors of the product may vary from the
            colors being displayed on your device.
          </div>
        </div>
      </div>
    </>
  );
}
