import React from "react";
import "../styles/WorkModal.css";
import CloseIcon from "@mui/icons-material/Close";

function WorkModal({ img, title, description, projectLink, codeLink, setShowModal }) {
  return (
    <div className="workModal">
      <div className="workModal__modal">
        <img className="workModal__image" src={img} alt={title} />
        <div className="workModal__info">
          <div className="workModal__closeIcon" onClick={()=>setShowModal(false)}>
            <CloseIcon />
          </div>
          <h2 className="workModal__title">{title}</h2>
          <p className="workModal__description">{description}
          </p>
          <div className="workModal__buttons">
            <div className="workModal__button site-btn">
              <a href={projectLink}>View Project</a>
            </div>
            <div className="workModal__button code-btn">
              <a href={codeLink}>View Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkModal;
