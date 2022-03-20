import React from "react";

import bgImg from "../images/reactjs-icon 2.svg";

function About(props) {
  return (
    <section className={props.darkMode ? "about" : "about bg-light text-dark"}>
      <div className="container-fluid content">
        {props.darkMode && <img src={bgImg} className="bgImg" alt="" />}
        <div className="container pt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold">Fun facts about React</h1>
              <ul className="lh-lg fs-4">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
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

export default About;
