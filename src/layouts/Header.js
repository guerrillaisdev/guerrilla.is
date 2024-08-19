import { useEffect } from "react";
import { scroll_, stickyNav } from "../utilits";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import useSearch from "../hooks/UseSearch";

const Header = ({ dark }) => {
  const search = useSearch();
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scroll_);
  });

  return (
    <div className="Guerrilla_tm_header">
      <div className="container">
        <div className="inner">
          <div style={{ display: "flex", alignItems: "center", gap: "2rem", minWidth: "200px" }}>
            <div className="logo">
              <a href="#">
                <img src="img/logo/guerrilla-min.jpg" alt="" height="60" width="60" />
              </a>
            </div>
            <div style={{ minWidth: "300px" }}>
            <ReactSearchAutocomplete
            {...search}
            autoFocus
            placeholder="Search our tunes"
            styling={{
              height: "48px",
              border: "1px solid darkgreen",
              borderRadius: "4px",
              backgroundColor: "white",
              boxShadow: "none",
              hoverBackgroundColor: "#f2f2f2",
              color: "black",
              fontSize: "12px",
              iconColor: "green",
              lineColor: "black",
              placeholderColor: "darkgreen",
              // clearIconMargin: "3px 8px 0 0",
              zIndex: 2,
            }}
          />
          </div>


            {/* <ReactSearchBox
              placeholder="Placeholder"
              value="Doe"
              data={searchData}
              callback={(record) => console.log(record)}
            /> */}
          </div>

          <div className="menu">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              {/* <li>
                <a href="#portfolio">Portfolio</a>
              </li> */}
              <li>
                <a href="#service">Service</a>
              </li>
              {/* <li>
                <a href="#testimonial">Testimonial</a>
              </li> */}
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
