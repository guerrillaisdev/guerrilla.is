import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation]);
const Testimonial = () => {
  const props = {
    slidesPerView: 1,
    loop: true,
    pagination: false,
    navigation: {
      prevEl: ".prev_button",
      nextEl: ".next_button",
    },
  };
  return (
    <div className="Guerrilla_tm_section" id="testimonial">
      <div className="Guerrilla_tm_testimonials"  >
        <div className="left">
          <div className="image"> 
            <img src="img/hero/pexels-handshake2.png" alt="Guerrilla image"  />
            
          </div>
        </div>
        <div className="right">
          <div className="right_in">
            <div
              className="Guerrilla_tm_main_title"
              data-text-align="left"
              data-color="light"
            >
              <span>Testimonial</span>
              <h3>What People Say</h3>
            </div>
            <Swiper {...props} className="owl-carousel">
              <SwiperSlide className="item">
                <div className="text">
                  <p>
                  "Guerrilla Automotive tunes all my cars, and I have to say, these things run fast! Finally, I'm bustin\' down opps on these streets. Thanks, Guerrilla Automotive!"
                  </p>
                </div>
                <div className="name">
                  <h3>
                    Sicflo, <span>Customer</span>
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="text">
                  <p>
                  "Finding a reliable mechanic can be tough, but Guerrilla Automotives makes it easy. Their team is knowledgeable, and their prices are fair. I always leave feeling confident that my car is in great hands."
                  </p>
                </div>
                <div className="name">
                  <h3>
                    Sarah H. Butler, <span>Customer</span>
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="text">
                  <p>
                  "I had a major issue with my car, and Guerrilla Automotives fixed it in no time. Their expertise and dedication to customer satisfaction are unmatched. I will definitely be coming back for all my future car needs."
                  </p>
                </div>
                <div className="name">
                  <h3>
                    Micheal James, <span>Customer</span>
                  </h3>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="direct">
              <a className="prev_button">
                <i className="icon-left" />
              </a>
              <a className="next_button">
                <i className="icon-right" />
              </a>
            </div>
          </div>
        </div>
        <span className="border">
          <span
            className="in moving_effect"
            data-direction="x"
            data-reverse="yes"
          />
        </span>
        <span
          className="square moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
        <span className="quote moving_effect" data-direction="x">
          <i className="icon-quote-left" />
        </span>
      </div>
    </div>
  );
};

export default Testimonial;
