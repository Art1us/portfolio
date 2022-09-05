import React, { useState } from "react";
import WorkModal from "./WorkModal";

function PortfolioItem({ img, imgModal, title, description, projectLink, codeLink }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="portfolioItem">
      <img
        src={img}
        alt=""
        className="portfolioItem__img"
        onClick={() => setShowModal(true)}
      />
      {showModal && (
        <WorkModal
          img={img}
          imgModal={imgModal}
          title={title}
          description={description}
          setShowModal={setShowModal}
          projectLink={projectLink}
          codeLink={codeLink}
        />
      )}
    </div>
  );
}

export default PortfolioItem;
