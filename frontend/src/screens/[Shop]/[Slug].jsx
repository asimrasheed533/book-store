import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
export default function Detail() {
  const { state } = useLocation();

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  if (!state) {
    return <div>No product details available</div>;
  }
  return (
    <>
      <div className="book__detail__heading">Book Details</div>
      <div className="detail__container">
        <div className="detail__container__col">
          <div className="detail__container__col__main__img__warper">
            <img
              className="detail__container__col__main__image"
              src={state.img}
              alt="product book"
            />
          </div>
        </div>

        <div className="detail__container__col">
          <div className="detail__container__name">{state.title}</div>
          <div className="detail__price__entry">
            <span>Author:</span> {state.author}
          </div>

          <button
            onClick={() => {
              if (cartItems.find((item) => item.id === state.id)) {
                alert("book is already reserve");
              } else {
                dispatch(
                  addToCart({
                    id: state.id,
                    img: state.img,
                    name: state.name,
                    author: state.author,
                  })
                );
                alert("Book is added");
              }
            }}
            className="add__cart__btn"
          >
            Reserving Book
          </button>
          <div className="disclaimer__title">Book Deatils</div>
          <div className="disclaimer__detail">{state.description}</div>
        </div>
      </div>
    </>
  );
}
