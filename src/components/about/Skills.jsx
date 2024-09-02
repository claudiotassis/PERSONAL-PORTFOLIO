import React, { useState, useEffect } from "react";
import './styles.css'; // Ensure your styles are imported

// Modal Component
const Modal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <img src={imageSrc} alt="Skill" />
      </div>
    </div>
  );
};

// Skill Component
const Skill = ({ skillClass, skillPercent, skillName, onClick }) => {
  const [currentPercent, setCurrentPercent] = useState(0);
  const [currentClass, setCurrentClass] = useState("p0");

  useEffect(() => {
    let start = 0;
    const increment = skillPercent / 100;
    const interval = setInterval(() => {
      start += increment;
      if (start >= skillPercent) {
        start = skillPercent;
        clearInterval(interval);
      }
      setCurrentPercent(Math.floor(start));
      setCurrentClass(`p${Math.floor(start)}`);
    }, 10);

    return () => clearInterval(interval);
  }, [skillPercent]);

  return (
    <div className="col-6 col-md-3 mb-3 mb-sm-5">
      <div
        className={`c100 ${currentClass}`}
        onClick={onClick}
        style={{ cursor: 'pointer' }}
      >
        <span>{currentPercent}%</span>
        <div className="slice">
          <div className="bar"></div>
          <div className="fill"></div>
        </div>
      </div>
      <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
        {skillName}
      </h6>
    </div>
  );
};

const Skills = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const skillsContent = [
    { skillClass: "p90", skillPercent: 90, skillName: "JavaScript", imageSrc: "/image1.png" },
    { skillClass: "p80", skillPercent: 80, skillName: "React", imageSrc: "/images/image2.jpg" },
    { skillClass: "p75", skillPercent: 75, skillName: "CSS", imageSrc: "/images/image3.jpg" },
    { skillClass: "p85", skillPercent: 85, skillName: "HTML", imageSrc: "/images/image4.jpg" },
  ];

  const openModal = (imageSrc) => {
    console.log(`Opening modal with image: ${imageSrc}`); // Debug
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("Closing modal"); // Debug
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <>
      {skillsContent.map((val, i) => (
        <Skill
          key={i}
          skillClass={val.skillClass}
          skillPercent={val.skillPercent}
          skillName={val.skillName}
          onClick={() => openModal(val.imageSrc)}
        />
      ))}

      <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={modalImage} />
    </>
  );
};

export default Skills;
