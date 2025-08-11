import Image from "next/image";
import React from "react";
import EduCom from "../utility/EduCom";

const Biography = () => {
  return (
    <section className="pt-10 px-2" href="/about">
      <div className="container">
        <div className="md:flex lg:px-5 gap-20">
          <div className="md:w-1/2">
            <div>
              <h2 className="text-2xl underline font-bold uppercase text-blue-800 py-5">
                Biography
              </h2>
              <p className="text-base text-justify">
                To build a challenging career with honesty and loyalty by
                translating my experience, knowledge, skills and abilities into
                value for an organization. To obtain a position of
                responsibilities that utilizes my skills and experience and keen
                to work in an environment where I can enrich my knowledge.
              </p>
            </div>
            <div>
              <h2 className="text-2xl underline font-bold uppercase text-blue-800 py-5">
                Education
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <EduCom
                  title="Diploma in Full Stack Development"
                  subTitle="Creative IT Institute"
                  year="In Course"
                />
                <EduCom
                  title="B.Sc. in EEE"
                  subTitle="Presidency University"
                  year="2022"
                  GPA="3.01"
                />
                <EduCom
                  title="Diploma in Electrical Engineering"
                  subTitle="Uttara Engineering College"
                  year="2018"
                  GPA="2.87"
                />
                <EduCom
                  title="Secondary School Certificate"
                  subTitle="Maijdee Technical School & College"
                  year="2013"
                  GPA="4.23"
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div>
              <h2 className="text-2xl underline font-bold uppercase text-blue-800 py-5">
                Experience
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <EduCom
                  title="Data Analyst (Work from Home)"
                  subTitle="Intelligent Image Management Ltd."
                  year="Feb 2025 - Jul 2025"
                />
                <EduCom
                  title="Sub-Assistant Engineer-IT"
                  subTitle="Shaheed Monsur Ali Medical College"
                  year="Oct 2021 — Oct 2023"
                />
                <EduCom
                  title="Data Analyst (Work from Home)"
                  subTitle="Intelligent Image Management Ltd."
                  year="Aug 2022 - Jan 2024"
                />
                <EduCom
                  title="Accounts Executive"
                  subTitle="Shin-Shin Japan Hospital Foundation."
                  year="Aug 2016 - Oct 2021"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="pt-4">
                  <h2 className="text-2xl font-bold">Competences</h2>
                  <ul className="grid grid-cols-2">
                    <li className="font-base text-gray-400">HTML</li>
                    <li className="font-base text-gray-400">CSS</li>
                    <li className="font-base text-gray-400">Bootstrap</li>
                    <li className="font-base text-gray-400">Tailwind</li>
                    <li className="font-base text-gray-400">JavaScript</li>
                    <li className="font-base text-gray-400">React JS</li>
                    <li className="font-base text-gray-400">Next JS</li>
                  </ul>
                </div>
                <div className="pt-4">
                  <h2 className="text-2xl font-bold">Tools</h2>
                  <ul className="grid grid-cols-2">
                    <li className="font-base text-gray-400">Figma</li>
                    <li className="font-base text-gray-400">VS Code</li>
                    <li className="font-base text-gray-400">Git & GitHub</li>
                    <li className="font-base text-gray-400">Firebase</li>
                    <li className="font-base text-gray-400">Vercel</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
