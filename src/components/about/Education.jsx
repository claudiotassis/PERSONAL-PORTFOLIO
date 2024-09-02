import React from "react";

const educationContent = [
  {
    year: "2024",
    degree: "Software Analysis and Development",
    institute: "Faculdade Descomplica",
    details: `Associate degree in System Analysis and Development.`,
  },
  {
    year: "2013",
    degree: "ENGLISH LANGUAGES AND ARTS ",
    institute: "UFES",
    details: `The Languages and Arts degree provides intensive study of the English language, as well as the literature and culture of the particular area or country`,
  },
  {
    year: "2000",
    degree: "High School + Data Processing",
    institute: "Centro Capixaba de Informática",
    details: `Studies based on tecnical operation and maintenance of administrative systems,
    financial and industrial; database creation; program preparation and
    project development; technical feasibility studies aimed at selecting alternatives,
    from the point of view of economy and efficiency; in project management
    Data processing`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-book"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
