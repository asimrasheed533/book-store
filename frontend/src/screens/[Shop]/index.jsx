import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import useQuery from "../../utils/useQuery";
import { useLocation } from "react-router-dom";
export default function Shop() {
  const { data: products } = useQuery("products");
  const location = useLocation();
  const { id } = location.state || {}; // Get the category id passed through state
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    // Filter products based on the category id
    if (id) {
      const filtered = products?.filter((product) => product.categoryId === id);
      setFilteredProducts(filtered);
    }
  }, [id, products]);
  return (
    <>
      <div className="shop__products__filter__warper">
        <div className="filter__warper__heading">
          Buy Books Online With The Best Price!
        </div>
        {/* <div className="filter__item__entry__warper">
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
          <div
            className={`filter__item__entry ${
              isActive === 4 && "filter__item__entry__active"
            }`}
            onClick={() => setIsActive(4)}
          >
            Computer
          </div>
        </div> */}
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
