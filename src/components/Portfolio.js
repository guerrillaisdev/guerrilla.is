import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import {
  fb,
  insta,
  maximize,
  soundcloud,
  text,
  twitter,
  vimeo,
  youtube,
} from "../svgImage";
import { aTagClick, dataImage } from "../utilits";
import ModalBox from "./ModalBox";
import Popup from "./Popup";

const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".filter-item",
        layoutMode: "fitRows",
      });
    }, 300);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    dataImage();
    aTagClick();
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  // popup
  const [video, setVideo] = useState(false);
  const [videoContent, setVideoContent] = useState({ name: "", src: "" });
  const showPopup = (name, src) => {
    setVideo(true);
    setVideoContent({ name, src });
  };
  // Model Box
  const [modal, setModal] = useState(0);
  return (
    <div className="Guerrilla_tm_section help" id="portfolio">
      {video && <Popup close={setVideo} content={videoContent} />}
      <div className="Guerrilla_tm_portfolio wow fadeInUp" data-wow-duration="1s">
        <div className="container">
          <div
            className="Guerrilla_tm_main_title"
            data-text-align="center"
            data-color="light"
          >
            <span>Selected works</span>
            <h3>Portfolio</h3>
          </div>
          <div className="portfolio_filter">
            <ul>
              <li>
                <a onClick={handleFilterKeyChange("*")} className="current">
                  All
                </a>
              </li>
              <li>
                <a onClick={handleFilterKeyChange("paint")}>Tuning</a>
              </li>
              <li>
                <a onClick={handleFilterKeyChange("clean")}>Cleaning</a>
              </li>
              <li>
                <a onClick={handleFilterKeyChange("detail")}>Detailing</a>
              </li>
            </ul>
          </div>
          <div className="portfolio_list">
            <ul className="gallery_zoom">
              <li className="filter-item detail">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="Guerrilla image" />
                    <div className="main" data-img-url="img/portfolio/pexels-mech5.jpg" />
                  </div>
                  <div className="overlay" />
                  {text}
                  <div className="details">
                    <span>Detail</span>
                    <h3>Client Name</h3>
                  </div>
                  <a
                    className="Guerrilla_tm_full_link portfolio_popup"
                    href="#"
                    onClick={() => setModal(1)}
                  />
                  <div className={modal === 1 ? "" : "hidden_content"}>
                    <ModalBox close={setModal}>
                      <div className="popup_details">
                        <div className="top_image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/pexels-mech5.jpg"
                          ></div>
                        </div>
                        <div className="portfolio_main_title">
                          <span>Detail</span>
                          <h3>Guerrilla</h3>
                          <div></div>
                        </div>
                        <div className="main_details">
                          <div className="textbox">
                            <p>
                              Description of what you did on this vehicle...
                            </p>
                            <p>
                              Longer description...
                            </p>
                          </div>
                          <div className="detailbox">
                            <ul>
                              <li>
                                <span className="first">Client</span>
                                <span>First Last</span>
                              </li>
                              <li>
                                <span className="first">Category</span>
                                <span>
                                  <a href="#">Detail</a>
                                </span>
                              </li>
                              <li>
                                <span className="first">Date</span>
                                <span>March 07, 2021</span>
                              </li>
                              <li>
                                <span className="first">Share</span>
                                <ul className="share">
                                  <li>
                                    <a href="#">{fb}</a>
                                  </li>
                                  <li>
                                    <a href="#">{twitter}</a>
                                  </li>
                                  <li>
                                    <a href="#">{insta}</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images">
                          <ul>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="Guerrilla image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/pexels-tuning1.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="Guerrilla image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/pexels-clean1.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="Guerrilla image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ModalBox>
                  </div>
                </div>
              </li>
              <li className="filter-item paint">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="Guerrilla image" />
                    <div className="main" data-img-url="img/portfolio/pexels-tuning2.jpg" />
                  </div>
                  <div className="overlay" />
                  {maximize}
                  <div className="details">
                    <span>Image</span>
                    <h3>Client Name</h3>
                  </div>
                  <a
                    className="Guerrilla_tm_full_link zoom"
                    href="#"
                    onClick={() => showPopup("image", "img/portfolio/pexels-tuning2.jpg")}
                  />
                </div>
              </li>
              <li className="filter-item detail">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="Guerrilla image" />
                    <div className="main" data-img-url="img/portfolio/pexels-tuning1.jpg" />
                  </div>
                  <div className="overlay" />
                  {text}
                  <div className="details">
                    <span>Detail</span>
                    <h3>Client Name</h3>
                  </div>
                  <a
                    className="Guerrilla_tm_full_link portfolio_popup"
                    href="#"
                    onClick={() => setModal(1)}
                  />
                  <div className={modal === 1 ? "" : "hidden_content"}>
                    <ModalBox close={setModal}>
                      <div className="popup_details">
                        <div className="top_image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/pexels-tuning1.jpg"
                          ></div>
                        </div>
                        <div className="portfolio_main_title">
                          <span>Detail</span>
                          <h3>Guerrilla</h3>
                          <div></div>
                        </div>
                        <div className="main_details">
                          <div className="textbox">
                            <p>
                              Description of what you did on this vehicle...
                            </p>
                            <p>
                              Longer description...
                            </p>
                          </div>
                          <div className="detailbox">
                            <ul>
                              <li>
                                <span className="first">Client</span>
                                <span>First Last</span>
                              </li>
                              <li>
                                <span className="first">Category</span>
                                <span>
                                  <a href="#">Detail</a>
                                </span>
                              </li>
                              <li>
                                <span className="first">Date</span>
                                <span>March 07, 2021</span>
                              </li>
                              <li>
                                <span className="first">Share</span>
                                <ul className="share">
                                  <li>
                                    <a href="#">{fb}</a>
                                  </li>
                                  <li>
                                    <a href="#">{twitter}</a>
                                  </li>
                                  <li>
                                    <a href="#">{insta}</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images">
                          <ul>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="Guerrilla image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/pexels-clean1.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="Guerrilla image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/pexels-engine1.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="Guerrilla image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/pexels-mech6.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ModalBox>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
