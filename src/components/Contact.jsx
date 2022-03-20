import React from "react";

import profilePic from "../images/me.jpg"

function Contact(props) {
  return (
    <section className={props.darkMode ? "about pt-5" : "about pt-5 bg-light text-dark"}>
      <div className="container">
        <h3 className="text-center">Welcome to Contact page..</h3>
      </div>

      <div className=" row justify-content-center page ">
        <div className=" col-10 col-md-4 col-lg-3 cardBody">
          <div className="info">
            <img src={profilePic} alt="" />
            <div className="name">
              <h1>Shahadat Hossain</h1>
              <h3>Frontend Developer</h3>
              <p>shahadat.website</p>
              <div className="myBtn">
                <button>
                  <i className="far fa-envelope"></i>Email
                </button>
              </div>
            </div>
          </div>
          {/* about section  */}
          <div className="parent">
            <div className="child">
              <h2>About</h2>
              <p>
                I am a frontend developer with a particular interest in making
                things simple and automating daily tasks. I try to keep up with
                security and best practices, and am always looking for new
                things to learn.
              </p>
            </div>
          </div>
          {/* interests section  */}
          <div className="parent">
            <div className="child">
              <h2>Interests</h2>
              <p>
                Food expert. Music scholar. Reader. Internet fanatic. Bacon
                buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee
                fanatic.
              </p>
            </div>
          </div>
          {/* Footer section  */}
          <div className="footer">
            <div className="parentFooter">
              <a href="/">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
