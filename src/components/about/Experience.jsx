import React from "react";

const experienceContent = [
  {
    year: "   2021 - Present",
    position: " Software Engineer",
    compnayName: "Freelance",
    details: `  Small projects based on DIRECTUS`,
  },
  {
    year: "   2020 - Present",
    position: " Web Developer",
    compnayName: "Freelance",
    details: `  Creating webpage layouts, writing code, editing website content, and making adjustments based on client feedback`,
  },
  {
    year: "   2021 - Present",
    position: " English Teacher",
    compnayName: "CE São Domingos",
    details: `  English teacher for high school students`,
  },
  {
    year: "   2021 - Present",
    position: " English Teacher",
    compnayName: "Salesiano JC",
    details: ` English teacher for middle school students`,
  },
  {
    year: "   2014 - 2019",
    position: "English Teacher",
    compnayName: "SEB",
    details: `English teacher for middle and high school students`,
  },
  {
    year: "2013 - 2017",
    position: "English Teacher",
    compnayName: "CE Leonardo da Vinci",
    details: `English teacher for middle school students`,
  },
  {
    year: "2008 - 2015",
    position: "English Teacher",
    compnayName: "CCAA",
    details: `EFL teacher for kids, teens and adults`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
