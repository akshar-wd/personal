import React from "react";
import styles from "./css/page.module.css";
import { useState } from "react";

const Home = () => {
  const [title, setTitle] = useState("Would you go on a date with me ????");
  const [img, setImg] = useState("/assets/begging.gif");
  const [text, setText] = useState("YES");

  const [nobuttonstyle, setNobuttonstyle] = useState({});

  const yesButtonHandler = (event) => {
    console.log(event.target.innerText);
    if (event.target.innerText === "YES") {
      setImg("/assets/success.gif");
      setNobuttonstyle({ display: "none" });
      setTitle("Yayayyay! Finally 😘");
      setText("let's fix a time and place ! 🥰");

    }
      if (event.target.innerText === "let's fix a time and place ! 🥰") {
        window.open(
          "https://wa.me/7678466800?text=Hey%2C%20I%20saw%20your%20website%2C%20that%20was%20so%20sweet!%20I%20would%20love%20to%20go%20out%20with%20you"
        );
      }
  };

  function MouseOver(event) {
    const i = Math.floor(Math.random() * 60) + 1;
    const j = Math.floor(Math.random() * 80) + 1;
    event.target.style.left = i + "vw";
    event.target.style.top = j + "vh";
    event.target.style.position = "absolute";
  }

  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <main className={styles.main}>
          <h2>{title}</h2>

          <img src={img} height={300} alt="Nothing" />
        </main>
        <div className={styles.button_group}>
          <button
            id="no_btn"
            style={nobuttonstyle}
            className={`${styles.button} ${styles.btn_no}`}
            onMouseOver={MouseOver}
          >
            NO
          </button>
          <button id="btn" onClick={yesButtonHandler} className={styles.button}>
            {text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
