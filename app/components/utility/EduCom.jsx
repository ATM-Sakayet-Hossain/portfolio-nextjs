import React from "react";

const EduCom = ({ title, subTitle, year, GPA }) => {
  return (
    <>
      <div>
        <h2 className="font-bold text-2xl text-gray-700">{title}</h2>
        <p className="text-xl text-gray-500 py-2">{subTitle}</p>
        <small className="text-base text-gray-400 pr-2">{year}</small>
        <small className="text-base text-gray-400">{GPA}</small>
      </div>
    </>
  );
};

export default EduCom;
