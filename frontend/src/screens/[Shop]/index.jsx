import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import useQuery from "../../utils/useQuery";
export default function Shop() {
  const { data: products, isLoading: loading } = useQuery("products");
  const [isActive, setIsActive] = useState(0);
  console.log("product", products);
  const filterData = [
    {
      id: 1,
      title: "Lightspeed Robots",
      author: "Demo jhon",
      description:
        "The latest Apple iPhone with A15 Bionic chip, 5G capability, and improved camera features.",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2t8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      title: "Lightspeed Robots",
      author: "Demo jhon",
      description:
        "Samsung's flagship phone with a powerful Exynos 2100 chip, 120Hz display, and versatile camera.",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2t8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      title: "Lightspeed Robots",
      author: "Demo jhon",
      description:
        "Google's latest phone featuring the custom Tensor chip, excellent AI features, and pure Android experience.",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2t8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      title: "Lightspeed Robots",
      author: "Demo jhon",
      description:
        "OnePlus's premium phone with Snapdragon 888, fast charging, and a smooth 120Hz display.",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2t8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
      title: "Lightspeed Robots",
      author: "Demo jhon",
      description:
        "Sony's high-end phone with a 21:9 CinemaWide display, triple camera setup, and great audio features.",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2t8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 6,
      title: "Lightspeed Robots",
      author: "Demo jhon",
      description:
        "Xiaomi's flagship with Snapdragon 888, AMOLED display, and impressive fast charging capabilities.",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2t8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 7,
      title: "Lightspeed Robots",
      author: "Demo jhon",
      description:
        "Huawei's high-end phone with Kirin 990, Leica camera system, and excellent battery life.",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2t8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 8,
      title: "Lightspeed Robots",
      author: "Demo jhon",
      description:
        "Nokia's 5G phone with a large display, pure Android experience, and solid build quality.",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2t8ZW58MHx8MHx8fDA%3D",
    },
  ];

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
          {products?.map((product) => (
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
