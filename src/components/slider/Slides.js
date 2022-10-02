import React from "react";
import "./Slider.css";


const slidesInfo = [
  {
    src:
      "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWluaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    alt: "Project 1",
    desc: "Proyecto 1",
  },
  {
    src:
      "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    alt: "Project 2",
    desc: "Proyecto 2",
  },
  {
    src:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=397&q=80",
    alt: "Project 3",
    desc: "Proyecto 3",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;