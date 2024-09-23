import { Link } from "react-router-dom";
import { PngLibrarybook } from "@assets";
import { PngPromoimg } from "@assets";
import banner from "../assets/banner.jpg";
import useQuery from "../utils/useQuery";

export default function Index() {
  const { data: products } = useQuery("products");
  const { data: categories } = useQuery("/categories");

  return (
    <>
      <div className="library__banner__container">
        <img
          className="library__banner__container__image"
          src={banner}
          alt="banner  book store"
        />
      </div>
      <div className="promo__card__container">
        <div className="promo__card__warper">
          <div className="promo__card__content">
            <div className="promo__card__content__title">
              Books Make Great Gifts
            </div>
            <div className="promo__card__content__text">
              Why not send the gift of a book to family & friends.
            </div>
          </div>
          <div className="promo__card__img">
            <img src={PngPromoimg} alt="promo" />
          </div>
        </div>
        <div className="promo__card2__warper">
          <div className="promo__card__content__discount">
            <div className="promo__card__content__title__discount">
              Discount up to
            </div>
            <div className="promo__card__content__title__discount__off">
              20% off
            </div>
            <div className="promo__card__content__text__discount">
              It all beings with a great book!
            </div>
          </div>
        </div>
      </div>
      <div className="categories__container__heading">Choose Categories</div>
      <div className="categories__container">
        {categories?.map((category) => (
          <Link
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            to={`/${category.id}`}
            state={{ id: category.id }}
            className="categories__item"
            key={category.id}
          >
            <div className="categories__item__img">
              <img src={category.img} alt="coffee" />
            </div>
            <div className="categories__item__name">{category.name}</div>
          </Link>
        ))}
      </div>
      <div className="popular__container">
        <div className="popular__container__heading">Popular Products</div>
        <div className="popular__container__cards">
          {products ? (
            products
              .filter((product) => product.type === "featured")
              ?.map((product) => (
                <PopularProducts key={product.id} product={product} />
              ))
          ) : (
            <div className="placeholder">
              No featured products available at the moment.
            </div>
          )}
        </div>
      </div>
      <div className="promo__container__upper">
        <div className="promo__container">
          <div className="promo__container__content">
            <div className="promo__container__content__title">
              Special Offers
            </div>
            <div className="promo__container__content__heading">
              BOOKS are magical portals to different worlds,filled with
              wonder,adventure,and khowledge.
            </div>
            <div className="promo__container__content__sub__heading">
              Last call for up to <span></span> off!
            </div>
            <div className="promo__container__content__btn">Buy Now</div>
          </div>
          <div className="promo__container__img">
            <img src={PngLibrarybook} alt="fashion_style" />
          </div>
        </div>
      </div>
      <div className="arrival__container">
        <div className="popular__container__heading">New Arrivals</div>
        <div className="item__container__warper">
          {products ? (
            products
              .filter((product) => product.type === "latest")
              ?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
          ) : (
            <div className="placeholder">
              No Arrival products available at the moment.
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function ProductCard({ product }) {
  return (
    <div className="item__container">
      <div className="item__container__img">
        <img src={product.img} alt="book_store" />
      </div>
      <div className="item__container__name">{product.title}</div>
      <div className="item__container__author">
        <span>Price:</span>
        {product.price}
      </div>
    </div>
  );
}

function PopularProducts({ product }) {
  return (
    <Link
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      to={`/shop/${product.id}`}
      state={product}
      className="popular__card__warper"
    >
      <div className="popular__card__img">
        <img src={product.img} alt="books" />
      </div>

      <div className="popular__text__content">
        <div className="popular__card__name">{product.title}</div>
        <div className="item__container__author">
          <span>Price:</span> {product.price}
        </div>
      </div>
    </Link>
  );
}
