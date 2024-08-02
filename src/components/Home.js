import { useEffect, useState } from "react";
import { fb, insta, msg, twitter } from "../svgImage";
import { parallax } from "../utilits";

const Home = () => {
  const [text, setText] = useState(1);
  useEffect(() => {
    parallax();
    const interval = setInterval(() => {
      setText(text < 3 ? text + 1 : 1);
    }, 5000);
    return () => clearInterval(interval);
  });

  const namestyle = {
    fontSize: '6.9em',  
    letterSpacing: '-1.5px'  
  };



  return (
    <div className="Guerrilla_tm_section " id="home">
      <div className="Guerrilla_tm_hero">
        <div className="container">
          <div className="hero_inner">
            <div className="content">
              <h3 className="name" style={namestyle}>Guerrilla  Automotive</h3> 
              <div className="socials">
                <ul>
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
              </div>
              <div className="hero_buttons">
                <div className="Guerrilla_tm_button">
                  <a className="anchor" href="#contact">
                    <span>Message Me {msg}</span>
                  </a>
                </div>
                <div className="simple_button">
                  <a className="anchor" href="#service">
                    Services
                  </a>
                </div>
              </div>
            </div>
            <div className="avatar parallax" style={{ position: "absolute" }}>
              <div className="main">
                <img
                  src="img/hero/pexels-hero1.png"
                  alt="image"
                  className="layer"
                  data-depth="0.1"
                />
              </div>
              <span className="one">
                <span className="in layer" data-depth="0.14" />
              </span>
              <span className="two">
                <span className="in layer" data-depth="0.18" />
              </span>
              <span className="three">
                <span className="in layer" data-depth="0.22" />
              </span>
              <span className="four">
                <span className="in layer" data-depth="0.26" />
              </span>
              <span className="five">
                <span className="in layer" data-depth="0.3" />
              </span>
              <h3 className="stroke_text">
                <span>Worldwide</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="hero_mail">
          <a className="line_anim" href="#">
            hello@guerrilla.sh
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
