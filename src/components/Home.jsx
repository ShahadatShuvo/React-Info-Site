import React from "react";

import bgImg from "../images/reactjs-icon 2.svg";

function Home(props) {
  return (
    // section-1 main-body
    <section className={props.darkMode ? "home" : "home bg-light text-dark"}>
      <div className="container-fluid content">
        {props.darkMode && <img src={bgImg} className="bgImg" alt="" />}
        <div className="container pt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold">Reasons I'm excited to learn React</h1>
              <ul className="lh-lg fs-4">
                <li>
                  It's a popular library, so I'll be able to fit in with the
                  cool kids!
                </li>
                <li>
                  I'm more likely to get a job as a developer if I know React
                </li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>
                  Powers thousands of enterprise apps, including mobile apps
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
