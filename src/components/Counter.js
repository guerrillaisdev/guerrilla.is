import ReactCounter from "./ReactCounter";

const Counter = () => {
  return (
    <div className="Guerrilla_tm_section">
      <div className="Guerrilla_tm_counter">
        <div className="container">
          <div className="counter_list">
            <ul className="wow fadeIn" data-wow-duration="1s">
              <li>
                <div className="list_inner">
                  <div className="wrapper">
                    <div className="value">
                      <span className="abs">
                        <ReactCounter end={5} />
                        <label className="big">K</label>
                      </span>
                    </div>
                    <div className="text">
                      <h3>
                        Detailing
                        <br />
                        Projects
                      </h3>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="wrapper">
                    <div className="value">
                      <span className="abs">
                        <ReactCounter end={90} />
                        <label className="small">+</label>
                      </span>
                    </div>
                    <div className="text">
                      <h3>
                        In-House
                        <br />
                        Services
                      </h3>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="wrapper">
                    <div className="value">
                      <span className="abs">
                        <ReactCounter end={300} />
                        <label className="small">+</label>
                      </span>
                    </div>
                    <div className="text">
                      <h3>
                        Satisfied
                        <br />
                        Clients
                      </h3>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <span className="border moving_effect" data-direction="x" />
      </div>
    </div>
  );
};

export default Counter;
