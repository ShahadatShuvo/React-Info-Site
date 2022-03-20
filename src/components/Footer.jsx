import React from "react";

function Footer(props) {
  return (
    <footer
      className={
        props.darkMode ? "footer" : "footer pt-3 text-dark bg--lightMode"
      }
    >
      <div className="container">
        <span>
          All rights reserved. Develeped by{" "}
          <a
            href="https://www.facebook.com/hossain.shuvo.7860/"
            target="_blank"
            rel="noreferrer"
            className={props.darkMode ? "dark" : "light"}
          >
            HossAin Shuvo.
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
