import React from "react";

function Services(props) {
  return (
    <section className={props.darkMode ? "about pt-5" : "about pt-5 bg-light text-dark"}>
      <div className="container">
        <h3>Welcome to Services page..</h3>
        <p>
          In simple words, services are just ordinary classes which will contain
          functions of your own choice, so call them how you like. 💡 Let's dig
          in! 🚀 We will start with fresh React application.
        </p>
        <p>
          React. js is UI library to render and organize UI components. When it
          comes to services that can help us add additional functionalities then
          we should create collections of functions, functional objects or
          classes.
        </p>
      </div>
    </section>
  );
}

export default Services;
