import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Project from "../src/components/Project";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="flex justify-center">
      <div className="w-1044 bg-white p-8 shadow">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-2/5">
            <div className="mb-4 px-5 py-2 bg-red-400 bg-opacity-20">
              <div className="flex justify-center items-center">
                <img
                  src="/img/MyProfile.jpg"
                  alt="Your Photo"
                  className="w-40 h-40 rounded-full"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-left uppercase block sm:hidden">
                Tsar Alexey Alexandrovich
              </h2>
              <h2 className="text-lg font-bold mb-2 flex justify-end items-center uppercase">
                About Me
                <div className="flex-grow h-0.5 ml-4 bg-gray-300"></div>
              </h2>

              <p className="text-gray-600 text-left px-5 text-gray-600 ">
                My name is Alexey. I'm looking for Frontend developer positions
                in both website and UX/UI design, and I'll be using the
                technical and problem-solving skills I've developed via studies
                and work. I value user experience and work toward a faultless
                user interface, which allows me to manage multiple tasks at once
                and demonstrates my commitment, organization.
              </p>
            </div>

            <div className="mb-4 px-5 py-2 bg-gray-200 bg-opacity-30">
              <h2 className="text-lg font-bold mb-2 flex justify-end items-center">
                <span className="text-xl uppercase">working skills</span>
                <div className="flex-grow h-0.5 ml-4 bg-gray-300"></div>
              </h2>
              <div className="mb-4 px-5">
                <h3 className="text-lg font-bold text-left text-gray-800 ">
                  Front-End Developer:
                </h3>
                <ul className="list-disc list-inside text-gray-600 text-left">
                  <li>HTML, CSS, Javascript, ReactJS, Tailwind</li>
                </ul>
              </div>
              <div className="mb-4 px-5">
                <h3 className="text-lg font-bold  text-left text-gray-800  ">
                  Back-End Developer:
                </h3>
                <ul className="list-disc list-inside text-gray-600 text-left">
                  <li>MySQL</li>
                </ul>
              </div>
              <div className="mb-4 px-5">
                <h3 className="text-lg font-bold  text-gray-800  text-left">
                  UI/UX Designer:
                </h3>
                <ul className="list-disc list-inside text-gray-600 text-left">
                  <li>Figma, Canva, Photoshop</li>
                </ul>
              </div>
            </div>

            <div className=" px-5 py-2 bg-gray-200 bg-opacity-30">
              <h2 className="text-lg font-bold mb-2 flex justify-end items-center">
                <span className=" px-2 text-xl uppercase  ">Languages</span>
                <div className="flex-grow h-0.5 ml-4 bg-gray-300"></div>
              </h2>
              <div className="mb-4 px-5">
                <ul className="list-disc list-inside text-gray-600 text-left">
                  <li>Russian - native</li>
                  <li>English - B1</li>
                </ul>
              </div>
            </div>
            <a href="/CV.pdf" download>
              <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mt-5 rounded hidden sm:block">
                Download CV
              </button>
            </a>
          </div>

          <div className="w-full sm:w-3/5">
            <div className="mb-4 px-5 py-2 ">
              <h2 className="text-4xl font-bold mb-2 text-left uppercase  hidden sm:block">
                Tsar Alexey Alexandrovich
              </h2>
              <div className="text-left mt-3 hidden sm:block">
                <span className="bg-red-400 bg-opacity-50 text-lg mb-2 uppercase px-4 py-2 text-white ">
                  Frontend Developer
                </span>
              </div>

              <h2 className="text-lg font-bold mb-2 mt-6 flex justify-end items-center">
                <span className=" px-2 text-xl uppercase  ">Contacts</span>
                <div className="flex-grow h-0.5 ml-4 bg-gray-300"></div>
              </h2>
              <ul className="list-disc text-lg list-inside px-5 text-left">
                <li>
                  <span className="font-bold">Location:</span> Minsk, Belarus
                </li>
                <li>
                  <span className="font-bold">Github:</span>
                  <a href="https://github.com/Alexsej1">
                    https://github.com/Alexsej1
                  </a>
                </li>
                <li>
                  <span className="font-bold">Email:</span>
                  <a href="mailto:AlexsejZar@gmail.com">AlexsejZar@gmail.com</a>
                </li>
              </ul>
            </div>

            <div className="mb-2 px-5 py-2">
              <h2 className="text-lg font-bold mb-2 flex justify-end items-center">
                <span className=" px-2 text-xl uppercase  ">Education</span>
                <div className="flex-grow h-0.5 ml-4 bg-gray-300"></div>
              </h2>
              <div className="mb-4 px-5">
                <h3 className="text-lg mb-2 text-left">
                  <span className="font-bold">
                    Belarusian State University (BSU)
                  </span>
                  <br />
                  Bachelor’s Degree in Web, expected June 2026.
                </h3>
              </div>
            </div>
            <div className="mb-4 px-5 ">
              <h2 className="text-lg font-bold mb-2 flex justify-end items-center">
                <span className="px-2 text-xl uppercase">Projects</span>
                <div className="flex-grow h-0.5 ml-4 bg-gray-300"></div>
              </h2>

              <Project
                title="Sortable TodoList"
                date="October, 2023"
                tags={["HTML", "ReactJS", "Module CSS"]}
                description="SortedTodoList is a versatile task management application
                that offers users the ability to create, track, and sort
                their to-do lists."
                link="https://github.com/Alexsej1/TodoList"
              />
              <Project
                title="Lamoda"
                date=" November, 2023"
                tags={["HTML", "ReactJS", "Material UI"]}
                description=" Lamoda is a project that encompasses a website offering a
                diverse range of fashion and accessory products. It provides
                convenient sorting options and efficient database management
                for handling product information."
                link="https://github.com/Alexsej1/Lamoda"
              />
              <Project
                title="Notion"
                date="  December, 2023"
                tags={["HTML", "ReactJS", "Redux", "Tailwind"]}
                description="Notion is a website that allows users to register, log in,
                and create, delete, or edit notes. It provides a
                user-friendly interface for efficient note-taking and
                organization."
                link="https://github.com/Alexsej1/NotionRedux"
              />
            </div>
            <div className="flex justify-center block sm:hidden">
              <a href="/CV.pdf" download>
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mt-8 rounded flex items-center">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
