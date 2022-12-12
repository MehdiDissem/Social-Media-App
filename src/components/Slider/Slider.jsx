import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "./Slider.css";

export default function Slider() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        class="img-with-overlay"
        className="w-100 d-block"
        itemId={1}
        src="https://thumbs.dreamstime.com/b/sport-equipment-2-22802518.jpg"
        alt="..."
      >
        <h5>WE SHARE THE SAME PASSION AS YOU</h5>
        <p>
          We are providing you a plateform that care about healthy people with a
          healthy mind.
        </p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src="https://images.ctfassets.net/yixw23k2v6vo/5pmsKw4R1HBSfnvtmkRUrg/bdd11cd13c0d1b31318e833710e50f28/iStock-973852008.jpg?fm=webp&q=50&w=1200&h=600&fit=thumb"
        alt="..."
      >
        <h5>MEET WITH PEOPLE THAT YOU FEEL COMFORTABLE WITH</h5>
        <p>
          Get news, stay updated and meet new people to make sports more fun.
        </p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="https://ideas.ted.com/wp-content/uploads/sites/3/2017/11/featured_art_goals_istock.png"
        alt="..."
      >
        <h5>ACHIEVE GOALS</h5>
        <p>
          We always try to keep you motivated in order to stay focused on your
          goals.
        </p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
