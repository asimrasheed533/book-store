import React, { useState } from "react";
import { Link } from "react-router-dom";
import useQuery from "../../utils/useQuery";
export default function Shop() {
  const { data: products, isLoading: loading } = useQuery("products");
  const [isActive, setIsActive] = useState(0);
  console.log("products", products);
  const categoryFilter = {
    0: null, // All categories
    1: "66b1f929c289c556e5bce5d0", // Novel
    2: "66bc5d2114e916d656f99ac1", // Islamic
    3: "66bc8172976df3e5257d76e8", // History
  };
  const filteredProducts = products?.filter((product) => {
    if (categoryFilter[isActive]) {
      return product.category === categoryFilter[isActive];
    }
    return true; // If "All" is selected, show all products
  });
  return (
    <>
      <div className="shop__products__filter__warper">
        <div className="filter__warper__heading">
          Buy Books Online With The Best Price!
        </div>
        <div className="filter__item__entry__warper">
          <div
            className={`filter__item__entry ${
              isActive === 0 && "filter__item__entry__active"
            }`}
            onClick={() => setIsActive(0)}
          >
            All
          </div>
          <div
            className={`filter__item__entry ${
              isActive === 1 && "filter__item__entry__active"
            }`}
            onClick={() => setIsActive(1)}
          >
            Novel
          </div>
          <div
            className={`filter__item__entry ${
              isActive === 2 && "filter__item__entry__active"
            }`}
            onClick={() => setIsActive(2)}
          >
            Islamic
          </div>
          <div
            className={`filter__item__entry ${
              isActive === 3 && "filter__item__entry__active"
            }`}
            onClick={() => setIsActive(3)}
          >
            History
          </div>
        </div>
      </div>
      <div className="shop__products__container">
        <div className="shop__products__items">
          {filteredProducts?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
}

function ProductCard({ product }) {
  return (
    <Link
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      to={`${product.id}`}
      state={product}
      className="shop__card__warper"
    >
      <div className="popular__card__img__overlay">
        <div className="popular__card__img">
          <img src={product.img} alt="fashion_style" />
        </div>
      </div>
      <div className="popular__text__content">
        <div className="popular__card__name">{product.title}</div>
        <div className="item__container__author">
          <span>Author:</span> {product.author}
        </div>
      </div>
    </Link>
  );
}
