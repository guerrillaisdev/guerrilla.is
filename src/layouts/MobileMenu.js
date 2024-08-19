import { useState } from "react";
import useSearch from "../hooks/UseSearch";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const MobileMenu = () => {
  const search = useSearch();
  const [toggle, setToggle] = useState(false);
  return (
    <div className="Guerrilla_tm_mobile_menu">
      <div className="mobile_menu_inner">
        <div className="mobile_in">
          <div className="logo">
            <a href="#">
              <img src="img/logo/guerrilla-min.jpg" alt="Guerrilla image" />
            </a>
          </div>

          <div style={{ width: "100%", margin: "0 2rem" }}>
          <ReactSearchAutocomplete
            {...search}
            autoFocus
            placeholder="Search our tunes"
            styling={{
              height: "48px",
              border: "1px solid gray",
              borderRadius: "4px",
              backgroundColor: "white",
              boxShadow: "none",
              hoverBackgroundColor: "#f2f2f2",
              color: "black",
              fontSize: "12px",
              iconColor: "black",
              lineColor: "black",
              placeholderColor: "gray",
              // clearIconMargin: "3px 8px 0 0",
              zIndex: 2,
            }}
          />
          </div>

          <div className="trigger">
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
            >
              <div className="hamburger-box" onClick={() => setToggle(!toggle)}>
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="dropdown"
        style={{ display: `${toggle ? "block" : "none"}` }}
      >
        <div className="dropdown_inner">
          <ul className="anchor_nav">
            <li className="current">
              <a onClick={() => setToggle(false)} href="#home">
                Home
              </a>
            </li>
            <li>
              <a onClick={() => setToggle(false)} href="#about">
                About
              </a>
            </li>
            {/* <li>
              <a onClick={() => setToggle(false)} href="#portfolio">
                Portfolio
              </a>
            </li> */}
            <li>
              <a onClick={() => setToggle(false)} href="#service">
                Service
              </a>
            </li>
            {/* <li>
              <a onClick={() => setToggle(false)} href="#testimonial">
                Testimonial
              </a>
            </li> */}
            <li>
              <a onClick={() => setToggle(false)} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
