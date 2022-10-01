import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Miguel Angel</h1>
      <p>Desarrolador | Web </p>
       <div className="botones">
       <button className="contacto">Contacto</button>
       <button className="vida">Hoja de Vida</button>
       </div>
    </div>
     
  );
};

export default Cover;
