import banner from "../assets/banner.jpg";
import { JpgBok01 } from "@assets";
import { JpgBok02 } from "@assets";
import { JpgBok04 } from "@assets";
import { PngPromoimg } from "@assets";
import { PngLibrarybook } from "@assets";
import useQuery from "../utils/useQuery";
export default function Index() {
  const { data: products, isLoading: loading } = useQuery("products");
  console.log("product", products);
  return (
    <>
      <div className="library__banner__container">
        <img
          className="library__banner__container__image"
          src={banner}
          alt="banner  book store"
        />
      </div>
      {/* //promo cards */}
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
      {/* <SliderBanner /> */}
      {/* // popular products */}

      <div className="popular__container">
        <div className="popular__container__heading">Popular Products</div>
        <div className="popular__container__cards">
          {products ? (
            products
              .filter((product) => product.type === "featured")
              ?.map((product) => (
                <PopularProducts key={product._id} product={product} />
              ))
          ) : (
            <div className="placeholder">
              No featured products available at the moment.
            </div>
          )}
        </div>
      </div>
      {/* /// promo banner */}
      <div className="promo__container__upper">
        <div className="promo__container">
          <div className="promo__container__content">
            <div className="promo__container__content__title">
              Special Offers
            </div>
            <div className="promo__container__content__heading">
              Discount On Books Learn Language
            </div>
            <div className="promo__container__content__sub__heading">
              Last call for up to <span>32%</span> off!
              {/* <span>32%</span> Discount On Books Learn Language */}
            </div>
            <div className="promo__container__content__btn">Buy Now</div>
          </div>
          <div className="promo__container__img">
            <img src={PngLibrarybook} alt="fashion_style" />
          </div>
        </div>
      </div>

      {/* //new arrival */}
      <div className="arrival__container">
        <div className="popular__container__heading">New Arrivals</div>
        <div className="item__container__warper">
          <ProductCard image={JpgBok01} />
          <ProductCard image={JpgBok02} />
          <ProductCard image={JpgBok04} />
          <ProductCard image={JpgBok02} />
          <ProductCard image={JpgBok01} />
          <ProductCard image={JpgBok02} />
          <ProductCard image={JpgBok01} />
          <ProductCard image={JpgBok01} />
          <ProductCard image={JpgBok02} />
        </div>
      </div>
    </>
  );
}

function ProductCard({ image }) {
  return (
    <div className="item__container">
      <div className="item__container__img">
        <img src={image} alt="book_store" />
      </div>
      <div className="item__container__name">Popular novels in English</div>
      <div className="item__container__author">
        <span>Author:</span> Demo jhon
      </div>
    </div>
  );
}

function PopularProducts({ product }) {
  return (
    <div className="popular__card__warper">
      <div className="popular__card__img">
        <img src={product.img} alt="books" />
      </div>

      <div className="popular__text__content">
        <div className="popular__card__name">{product.title}</div>
        {/* <div className="item__container__author">
          <span>Author:</span> {product.author}
        </div> */}
      </div>
    </div>
  );
}
