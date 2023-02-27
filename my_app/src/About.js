import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";
import about01 from "./img/about01.jpeg";
import about02 from "./img/about02.jpeg";
import about03 from "./img/about03.jpeg";
import { useRef, useEffect } from "react";

function About() {
  const K = useRef("");
  const J = useRef("");
  const S = useRef("");

  useEffect(() => {
    window.addEventListener("scroll", scrolling3);
    return () => {
      window.removeEventListener("scroll", scrolling3);
    };
  });

  function scrolling3() {
    let value = window.scrollY;
    K.current.style.top = 70 - value * 0.5 + "px";
    J.current.style.top = 800 - value * 0.5 + "px";
    S.current.style.top = 1500 - value * 0.5 + "px";
  }

  return (
    <div className="container-fluid px-5">
      <h1 className="d4d4 fw-bold text-center about-title mt-5 py-5 display-5 ">
        {"< About Us />"}
      </h1>

      <div className="row my-5">
        <span className="d-none d-md-block" id="K" ref={K}>
          K
        </span>
        <div className="col-12 col-md-6 d-flex flex-column align-items-center align-items-md-end">
          <img
            alt="Kevin"
            src={about02}
            className="aboutpic w-100"
            style={{
              boxShadow: "-10px 10px 0px #096f98",
              border: "#04b616 solid 5px",
            }}
          />
          <p className="mt-3 fs-3 d4d4">⮤ Kevin Tsui</p>
        </div>
        <div className="col-12 col-md-6 d-flex align-items-center d4d4 px-3 px-md-5 fs-5 text-center">
          <p className="p-4" style={{ border: "#04b616 dashed 2px" }}>
            You should be a little cautious of a mono version 1 "column back"
            sleeve. You have to be extremely cautious if it's a stereo copy.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6 d-flex align-items-center d4d4 px-3 px-md-5 fs-5 order-2 order-md-1 text-center">
          <p className="p-4" style={{ border: "#04b616 dashed 2px" }}>
            You should be a little cautious of a mono version 1 "column back"
            sleeve. You have to be extremely cautious if it's a stereo copy -
            only .
          </p>
        </div>
        <div className="col-12 col-md-6 d-flex flex-column align-items-center align-items-md-start mt-5 order-1 order-md-2 ">
          <img
            alt="Joanna"
            src={about03}
            className="aboutpic w-100"
            style={{
              boxShadow: "10px -10px 0px #e01e96",
              border: "#8c119c solid 5px",
            }}
          />
          <span className="d-none d-md-block" id="J" ref={J}>
            J
          </span>
          <p className="mt-3 fs-3 d4d4 ">Joanna Yau ⮥</p>
        </div>
      </div>

      <div className="row my-5">
        <span className="d-none d-md-block" id="S" ref={S}>
          S
        </span>
        <div className="col-12 col-md-6 d-flex flex-column align-items-center align-items-md-end">
          <img
            alt="Stephanie"
            src={about01}
            className="aboutpic w-100"
            style={{
              boxShadow: "-10px 10px 0px #04b616",
              border: "#096f98 solid 5px",
            }}
          />
          <p className="mt-3 fs-3 d4d4">⮤ Stephanie Yiu</p>
        </div>
        <div className="col-12 col-md-6 d-flex align-items-center d4d4 px-3 px-md-5 fs-5 text-center">
          <p className="p-4" style={{ border: "#04b616 dashed 2px" }}>
            You should be a little cautious of a mono version 1 "column back"
            sleeve. You have to be extremely cautious if it's a stereo copy -
            only a handful of stereo .
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
