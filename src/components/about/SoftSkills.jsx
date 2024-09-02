import React, { useState, useEffect } from "react";

const Skill = ({ skillClass, skillPercent, skillName }) => {
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
      <div className={`c100 ${currentClass}`}>
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
  const skillsContent = [
    { skillClass: "p90", skillPercent: 90, skillName: "JavaScript" },
    { skillClass: "p80", skillPercent: 80, skillName: "React" },
    { skillClass: "p75", skillPercent: 75, skillName: "CSS" },
    { skillClass: "p85", skillPercent: 85, skillName: "HTML" },
  ];

  return (
    <>
      {skillsContent.map((val, i) => (
        <Skill key={i} skillClass={val.skillClass} skillPercent={val.skillPercent} skillName={val.skillName} />
      ))}
    </>
  );
};

export default Skills;
