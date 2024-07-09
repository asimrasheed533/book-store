import { PngAboutbanner } from "@assets";
import React from "react";

export default function AboutUs() {
  return (
    <>
      <div className="about__container">
        <div className="about__container__overlay">
          <div className="about__container__overlay__img">
            <img src={PngAboutbanner} alt="" />
          </div>
        </div>
        <div className="about__banner__title">About Us</div>
      </div>
      <AboutCard
        style={{ flexDirection: "row-reverse" }}
        image="https://bookly-theme.myshopify.com/cdn/shop/files/abo-01.jpg?v=1622806819&width=1500"
        heading="Give Life to Reading"
        text="Viverra justo nec ultrices dui. Sit amet volutpat consequat mauris nunc congue nisi vitae. Lorem ipsum dolor sit amet. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Diam maecenas ultricies mi eget.
Integer quis auctor elit sed vulputate mi sit amet mauris. Quam lacus suspendisse faucibus interdum posuere lorem. Nibh tellus molestie nunc non blandit massa enim nec dui. Suspendisse in est ante in nibh mauris.."
      />
      <AboutCard
        image="https://bookly-theme.myshopify.com/cdn/shop/files/abo-02.jpg?v=1622806835&width=1500"
        heading="Seed of knowledge"
        text="Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Accumsan tortor posuere ac ut consequat semper viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada. Accumsan sit amet. Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque nec nam aliquam sem et. Cras sed felis eget velit aliquet lacus faucibus non est."
      />
      <AboutCard
        style={{ flexDirection: "row-reverse" }}
        image="https://bookly-theme.myshopify.com/cdn/shop/files/abo-03.jpg?v=1622806851&width=1500"
        heading="Best for Bookworms"
        text="Sed id semper risus in hendrerit gravida rutrum quisque. Malesuada nunc vel risus commodo viverra maecenas. At lectus urna duis convallis. Bibendum neque egestas congue quisque egestas diam. Volutpat commodo.
Cursus vitae congue mauris rhoncus aenean. Laoreet non curabitur gravida arcu ac tortor. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Imperdiet proin fermentum leo vel orci porta non pulvinar."
      />
    </>
  );
}

function AboutCard({ style, image, heading, text }) {
  return (
    <div className="about__card__container" style={style}>
      <div className="about__card__img">
        <img src={image} alt="book" />
      </div>
      <div className="about__card__contant">
        <div className="about__card__contant__title">{heading}</div>
        <div className="about__card__contant__text">{text}</div>
      </div>
    </div>
  );
}
