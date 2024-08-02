import { useEffect, useState } from "react";
import {
  camera,
  cameraDark,
  msg,
  pen,
  penDark,
  user,
  userDark,
  web,
  webDark,
} from "../svgImage";
import ModalBox from "./ModalBox";

const Service = ({ dark }) => {
  const [modal, setModal] = useState(0);
  const hidden = (value) => (value === modal ? "" : "service_hidden_details");

  useEffect(() => {
    let VanillaTilt = require("vanilla-tilt");
    VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
      maxTilt: 6,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 500,
      transition: true,
    });
  }, []);

  return (
    <div className="Guerrilla_tm_section" id="service">
      <div className="Guerrilla_tm_service">
        <div className="container">
          <div className="service_list">
            <ul>
              <li className="simple wow fadeInLeft" data-wow-duration="1s">
                <div className="list_inner">
                  <div
                    className="Guerrilla_tm_main_title"
                    data-text-align="left"
                    data-color="dark"
                  >
                    <span>What I Do</span>
                    <h3>My Services</h3>
                    <p>
                      Guerrilla Automotive offers high-quality performance ECU remaps(chip tuning) for cars, bikes, trucks, agriculture, and  marine vehicles. We also provide detailing and car repairs.
                    </p>
                  </div>
                </div>
              </li>
              <li
                className="wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    {dark ? penDark : pen}
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="service"
                    />
                  </span>
                  <div className="title">
                    <h3>Chip Tuning</h3>
                    <span className="price">
                      Starts from <span>$199</span>
                    </span>
                  </div>
                  <div className="text">
                    <p>
                    Chiptuning is the common name for the process of optimizing vehicle engine management software by changing the parameters. This results in improved performance and/or lower fuel consumption, and the addition or removal of functions.
                     There is no longer addition of special electronic components (chips), but instead the ECU’s (Engine Control Unit) software itself is modified and then written back into the vehicle ECU. {" "}
                    </p>
                  </div>
                  <a
                    className="Guerrilla_tm_full_link"
                    href="#"
                    onClick={() => setModal(3)}
                  />
                  <img
                    className="popup_service_image"
                    src="img/service/2.jpg"
                    alt="Guerrilla image"
                  />
                </div>
                <div className={hidden(3)}>
                  <ModalBox close={setModal}>
                    <div className="service_popup_informations">
                      <div className="image">
                        <img src="img/thumbs/4-2.jpg" alt="Guerrilla image" />
                        <div
                          className="main"
                          data-img-url="img/service/pexels-drive1.jpg"
                        />
                      </div>
                      <div className="main_title">
                        <h3>Service</h3>
                        <span className="price">
                          Starts from <span>$200</span>
                        </span>
                      </div>
                      <div className="descriptions">
                        <p>
                        Chiptuning is the common name for the process of optimizing vehicle engine management software by changing the parameters. This results in improved performance and/or lower fuel consumption, and the addition or removal of functions.
                        There is no longer addition of special electronic components (chips), but instead the ECU’s (Engine Control Unit) software itself is modified and then written back into the vehicle ECU. 
                        </p>
                        <p>
                          More text more text
                        </p>
                        <p>
                          More text more text
                        </p>
                      </div>
                    </div>
                  </ModalBox>
                </div>
              </li>
              <li className="wow fadeInLeft" data-wow-duration="1s">
              <div className="list_inner tilt-effect">
                  <span className="icon">
                    {dark ? penDark : pen}
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="service"
                    />
                  </span>
                  <div className="title">
                    <h3>Car Repair</h3>
                    <span className="price">
                      Starts from <span>$199</span>
                    </span>
                  </div>
                  <div className="text">
                    <p>
                    Our mobile automotive repair service provides convenient, reliable, 
                    and professional vehicle repairs and maintenance services directly to our customers' location.{" "}
                    </p>
                  </div>
                  <a
                    className="Guerrilla_tm_full_link"
                    href="#"
                    onClick={() => setModal(3)}
                  />
                  <img
                    className="popup_service_image"
                    src="img/service/pexels-drive1.jpg"
                    alt="Guerrilla image"
                  />
                </div>
                <div className={hidden(3)}>
                  <ModalBox close={setModal}>
                    <div className="service_popup_informations">
                      <div className="image">
                        <img src="img/thumbs/4-2.jpg" alt="Guerrilla image" />
                        <div
                          className="main"
                          data-img-url="img/service/pexels-drive1.jpg"
                        />
                      </div>
                      <div className="main_title">
                        <h3>Service</h3>
                        <span className="price">
                          Starts from <span>$199</span>
                        </span>
                      </div>
                      <div className="descriptions">
                        <p>
                          Guerrilla blah blah blah
                        </p>
                        <p>
                          More text more text
                        </p>
                        <p>
                          More text more text
                        </p>
                      </div>
                    </div>
                  </ModalBox>
                </div>
              </li>
              <li
                className="wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    {dark ? penDark : pen}
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="service"
                    />
                  </span>
                  <div className="title">
                    <h3>Car Detailing</h3>
                    <span className="price">
                      Starts from <span>$199</span>
                    </span>
                  </div>
                  <div className="text">
                    <p>
                    At Guerrilla Automotive, we make your car shine like new. Our expert technicians provide top-notch detailing, from hand washing and waxing to interior cleaning and polishing. 
                    Trust us to give your car the care and attention it deserves, ensuring it looks and feels exceptional.{" "}
                    </p>
                  </div>
                  <a
                    className="Guerrilla_tm_full_link"
                    href="#"
                    onClick={() => setModal(3)}
                  />
                  <img
                    className="popup_service_image"
                    src="img/service/2.jpg"
                    alt="Guerrilla image"
                  />
                </div>
                <div className={hidden(3)}>
                  <ModalBox close={setModal}>
                    <div className="service_popup_informations">
                      <div className="image">
                        <img src="img/thumbs/4-2.jpg" alt="Guerrilla image" />
                        <div
                          className="main"
                          data-img-url="img/service/2.jpg"
                        />
                      </div>
                      <div className="main_title">
                        <h3>Service</h3>
                        <span className="price">
                          Starts from <span>$199</span>
                        </span>
                      </div>
                      <div className="descriptions">
                        <p>
                          Guerrilla blah blah blah
                        </p>
                        <p>
                          testing 123
                        </p>
                        <p>
                          More text more text
                        </p>
                      </div>
                    </div>
                  </ModalBox>
                </div>
              </li>
              <li className="wow fadeInLeft" data-wow-duration="1s">
              <div className="list_inner tilt-effect">
                  <span className="icon">
                    {dark ? penDark : pen}
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="service"
                    />
                  </span>
                  <div className="title">
                    <h3>Tools, Equipment, & Parts</h3>
                    <span className="price">
                      Starts from <span>$199</span>
                    </span>
                  </div>
                  <div className="text">
                    <p>
                      Buy tools and necessity items for your cars, bikes, trucks and much more.{" "}
                    </p>
                  </div>
                  <a
                    className="Guerrilla_tm_full_link"
                    href="#"
                    onClick={() => setModal(3)}
                  />
                  <img
                    className="popup_service_image"
                    src="img/service/pexels-wrench1.jpg"
                    alt="Guerrilla image"
                  />
                </div>
                <div className={hidden(3)}>
                  <ModalBox close={setModal}>
                    <div className="service_popup_informations">
                      <div className="image">
                        <img src="img/thumbs/4-2.jpg" alt="Guerrilla image" />
                        <div
                          className="main"
                          data-img-url="img/service/pexels-wrench1.jpg"
                        />
                      </div>
                      <div className="main_title">
                        <h3>Service</h3>
                        <span className="price">
                          Starts from <span>$199</span>
                        </span>
                      </div>
                      <div className="descriptions">
                        <p>
                          Guerrilla blah blah blah
                        </p>
                        <p>
                          More text more text
                        </p>
                        <p>
                          More text more text
                        </p>
                      </div>
                    </div>
                  </ModalBox>
                </div>
              </li>
              <li
                className="simple text wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="list_inner">
                  <div className="wrapper">
                    <div className="inner_text">
                      <h3>Want Something Different?</h3>
                    </div>
                    <div className="Guerrilla_tm_button border">
                      <a className="anchor" href="#contact">
                        <span>Message Me {msg}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <span
          className="square_left moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
        <span
          className="square_right moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
      </div>
    </div>
  );
};

export default Service;
