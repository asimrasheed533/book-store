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
        text="Books are more than just words on a page;
        they are portals to diffrent worlds,perpectives.
        reading gives life to our imagination,thoughts,and emotions.
        when we read,we embark on ajourney through the minds of authors,
        exploring new worlds,
        meeting intriguing characters,and experiebcing a range
        of emotions.it allows us to escape reality,broden our perspectives,
        and gain knowledge.
        through reading,we can learn,grow,and develop empathy by understanding different viewpoints.
        "
      />
      <AboutCard
        image="https://bookly-theme.myshopify.com/cdn/shop/files/abo-02.jpg?v=1622806835&width=1500"
        heading="Seed of knowledge"
        text=" Seed of knowledge is a poetic way to refer to the beginning or origin of learning and understanding Just like a seed contains the potential to grow into a full-fledged plant the seed of knowledge represents the initial piece of information or insight that can develop into a more comprehensive understanding. It's the small, often simple idea or fact that can spark curiosity and lead to deeper exploration and growth. What’s your context or interest in the “seed of knowledge"
      />

      <div class="video__container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SKVcQnyEIT8?si=OUxPa6wXROaz8hGZ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
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
