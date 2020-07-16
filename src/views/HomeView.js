import React from "react";
import { Link } from "react-router-dom";

const HomeView = () => {
  return (
    <div className="contents">
      <div className="green-pics pics content">
        <img
          src={require("../assets/images/green-apples.jpg")}
          alt="Green apples"
        />
      </div>
      <div className="yellow-pics pics content">
        <img src={require("../assets/images/bananas.jpeg")} alt="Bananas" />
        <Link to="/blog">
          <button className="blog big-text">BLOG</button>
        </Link>
      </div>
      <div className="red-pics pics content">
        <img src={require("../assets/images/carrots.jpg")} alt="Carrots" />
      </div>
      <div className="green-text text content">
        <p>
          Go to <span className="big-text">STORE</span>
        </p>
        <Link to="/store">
          <button>BUY</button>
        </Link>
      </div>
      <div className="yellow-text text content">
        <p>
          We know that eating organic means high standards of animal welfare,
          fewer pesticides, no artificial additives, preservatives or routine
          use of antibiotics. We're inviting people to add happiness to the
          world and their lives by feeding their happy with organic - and to
          experience the unadulterated joy of organic food.
        </p>
      </div>
      <div className="red-text text content">
        <div>
          When we eat <span className="big-text">ORGANIC</span>, we feel{" "}
          <span className="big-text">HAPPY</span>.
        </div>
      </div>
      <div className="blue-text text content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dicta
        quos sint ratione maxime labore tenetur nemo quod iure tempore adipisci
        unde perferendis, ipsa obcaecati voluptas aspernatur rerum ipsam
        perspiciatis!
      </div>
      <footer className="text content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dicta
          quos sint ratione maxime labore tenetur nemo quod iure tempore
          adipisci unde perferendis, ipsa obcaecati voluptas aspernatur rerum
          ipsam perspiciatis!
        </p>
      </footer>
    </div>
  );
};

export default HomeView;
