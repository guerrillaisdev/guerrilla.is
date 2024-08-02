const About = () => {
  return (
    <div className="Guerrilla_tm_section" id="about">
      <div className="Guerrilla_tm_about">
        <div className="about_inner">
          <div className="left">
            <div className="image">
              <img src="img/thumbs/45-49.jpg" alt="Guerrilla image" />
              <div className="main" data-img-url="img/about/pexels-detail1.jpg" />
              <span
                className="square moving_effect"
                data-direction="y"
                data-reverse="yes"
              />
              <span className="border">
                <span
                  className="in moving_effect"
                  data-direction="x"
                  data-reverse="yes"
                />
              </span>
            </div>
          </div>
          <div className="center">
            <div className="title wow fadeInUp" data-wow-duration="1s">
              <span className="small">About</span>
              <h3>
                Guerrilla
              </h3>
              <h3>
                <span>Car Tuning & Detailing</span>
              </h3>
              <span className="subtitle">Based in Austin, Tx</span>
            </div>
            <div
              className="text wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <p>
              Our mobile automotive repair service provides convenient, reliable, and professional vehicle repairs and maintenance services directly to our customers' location.
              Our experienced and certified technicians use the latest tools and equipment to diagnose and repair a wide range of automotive issues,
              from simple maintenance tasks to complex engine repairs. With our flexible scheduling, competitive pricing, 
              and exceptional customer service, we strive to make your automotive repair experience as hassle-free as possible.
              </p>
              <p>
              Trust us to keep your vehicle running smoothly and safely, without the inconvenience of having to take it to a repair shop.
              </p>
            </div>
          </div>
          <div className="right">
            <div className="image">
              <img src="img/thumbs/41-61.jpg" alt="Guerrilla image" />
              <div className="main" data-img-url="img/about/pexels-mechs4.jpg" />
              <div
                className="square moving_effect"
                data-direction="x"
                data-reverse="no"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
