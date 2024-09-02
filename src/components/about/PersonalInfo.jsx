import React from "react";

const personalInfoContent = [
  { metaInfo: "Claudio", meta: "First Name"},
  { meta: "Last Name", metaInfo: "Tassis" },
  { meta: "Age", metaInfo: "44" },
  { meta: "Nationality", metaInfo: "Brazilian" },
  { meta: "Freelance", metaInfo: "Available" },
  
  { meta: "Address", metaInfo: "Vitória, ES, Brazil" },
  { meta: "Phone", metaInfo: "" },
  { meta: "Email", metaInfo: "claudiotassis@gmail.com" },
  { meta: "Langages", metaInfo: "Portuguese, English, Spanish" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.metaInfo}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.meta}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
