/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaDiscord,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Gradient Background */}
      <div
        className="absolute inset-0 opacity-20 "
        style={{
          backgroundImage: `
            radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0, transparent 50%),
            radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0, transparent 50%),
            radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0, transparent 50%),
            radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0, transparent 50%),
            radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0, transparent 50%),
            radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0, transparent 50%),
            radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0, transparent 50%)
          `,
        }}
      />

      {/* Dotted Overlay */}
      <div
        className="absolute inset-0 opacity-50 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 2px )",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative">
        {/* Header Section */}
        <header className="pt-20 pb-10 px-4 md:px-8 max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-violet-500 ring-offset-4 ring-offset-black transform hover:scale-110 transition-transform duration-300">
              <Image
                src="/abinnewphoto.JPG"
                alt="Abin Antony"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-200 to-purple-500 text-transparent bg-clip-text mb-4">
              Abin Antony
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 flex items-center justify-center gap-2">
              <svg
                className="w-6 h-6 text-green-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Full Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="  gap-6 mb-10 pt-2 grid grid-cols-1 md:grid-cols-5 px-5">
            {/* <div className=""> */}
            <a
              href="https://github.com/AbinAntony8888"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row justify-center items-center gap-2 text-blue-400 border-2 border-violet-600 px-4  bg-white/5 hover:bg-white/10 transition-colors duration-300 transform hover:scale-105 "
            >
              <FaGithub color="black" />
              GitHub
            </a>
            {/* </div> */}
            <a
              href="https://www.linkedin.com/in/abin-antony-a3b90a292/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row justify-center items-center gap-2 text-blue-400 border-2 border-violet-600  px-4  bg-white/5 hover:bg-white/10 transition-colors duration-300 transform hover:scale-105 "
            >
              <FaLinkedin color="blue" />
              LinkedIn
            </a>
            <a
              href="https://stackoverflow.com/users/20703743/abin-antony"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row justify-center items-center gap-2 text-blue-400 border-2 border-orange-400  px-4  bg-white/5 hover:bg-white/10 transition-colors duration-300 transform hover:scale-110 "
            >
              <FaStackOverflow color="orange" />
              Stack Overflow
            </a>
            <a
              href="https://discord.gg/tcA8aTKq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row justify-center items-center gap-2 text-blue-400 border-2 border-violet-600  px-4  bg-white/5 hover:bg-white/10 transition-colors duration-300 transform hover:scale-105 "
            >
              <FaDiscord color="violet" />
              Discord
            </a>
            <a
              href="mailto:abinantony8888@gmail.com?subject=Hello%20Abin&body=I%20would%20like%20to%20connect%20with%20you."
              className="flex flex-row justify-center items-center gap-2 text-blue-400 border-2 border-violet-600  px-4  bg-white/5 hover:bg-white/10 transition-colors duration-300 transform hover:scale-105 "
            >
              <FaEnvelope color="blue" />
              Email
            </a>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-4 md:px-8 max-w-6xl mx-auto pb-20">
          {/* About Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-500"></span>
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  Background
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Hi, I&apos;m Abin Antony, a passionate full-stack developer with
                  expertise in modern web technologies. I specialize in building
                  dynamic, responsive, and user-friendly applications.
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  Expertise
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  With a strong foundation in both front-end and back-end
                  technologies, I thrive on creating seamless digital
                  experiences that make a difference.
                </p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-500"></span>
              Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "HTML",
                "CSS",
                "React",
                "TypeScript",
                "Next.js",
                "Tailwind CSS",
                "Node.js",
                "GitHub",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-white/10 rounded-lg p-4 text-center backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
                >
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-500"></span>
              Experience
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="group relative bg-white/5 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-transform duration-300 transform hover:scale-105">
                <div className="aspect-video bg-gradient-to-r from-gray-700 via-gray-800 to-black flex justify-center items-center p-4">
                  <h3 className="text-xl font-semibold text-blue-400 text-center">
                    To-Do App
                  </h3>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-200 mb-2">
                    A Simple Task Management App
                  </h4>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    A full-stack to-do app built with React, Node.js, and
                    Next.js. It supports task management features and
                    demonstrates CRUD operations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      React
                    </span>
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      Node.js
                    </span>
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      Next.js
                    </span>
                  </div>
                  <a
                    href="https://github.com/AbinAntony8888/to-do-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded transition-colors duration-300"
                  >
                    <FaGithub size={16} />
                    View on GitHub
                  </a>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group relative bg-white/5 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-transform duration-300 transform hover:scale-105">
                <div className="aspect-video bg-gradient-to-r from-gray-700 via-gray-800 to-black flex justify-center items-center p-4">
                  <h3 className="text-xl font-semibold text-blue-400 text-center">
                    Next.js Chat App Frontend
                  </h3>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-200 mb-2">
                    Real-Time Chat Interface
                  </h4>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    A responsive and interactive chat application frontend built
                    with Next.js. This project demonstrates a modern UI/UX
                    design, seamless real-time messaging features, and
                    integration with WebSocket and RESTful APIs for smooth user
                    interactions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      Next.js
                    </span>
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      Tailwind CSS
                    </span>
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      WebSocket
                    </span>
                  </div>
                  <a
                    href="https://github.com/AbinAntony8888/nextjs-chat-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded transition-colors duration-300"
                  >
                    <FaGithub size={16} />
                    View on GitHub
                  </a>
                </div>
              </div>

              {/* Project 3 */}
              <div className="group relative bg-white/5 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-transform duration-300 transform hover:scale-105">
                <div className="aspect-video bg-gradient-to-r from-gray-700 via-gray-800 to-black flex justify-center items-center p-4">
                  <h3 className="text-xl font-semibold text-blue-400 text-center">
                    Chat App Backend
                  </h3>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-200 mb-2">
                    Real-Time Messaging System
                  </h4>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    A backend project for a real-time chat application using
                    Node.js and WebSocket. It showcases robust API integration
                    and database handling.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      Node.js
                    </span>
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      WebSocket
                    </span>
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      MongoDB
                    </span>
                  </div>
                  <a
                    href="https://github.com/AbinAntony8888/chatappBackendnode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded transition-colors duration-300"
                  >
                    <FaGithub size={16} />
                    View on GitHub
                  </a>
                </div>
              </div>

              {/* Project 4 */}
              <div className="group relative bg-white/5 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-transform duration-300 transform hover:scale-105">
                <div className="aspect-video bg-gradient-to-r from-gray-700 via-gray-800 to-black flex justify-center items-center p-4">
                  <h3 className="text-xl font-semibold text-blue-400 text-center">
                    Portfolio Website
                  </h3>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-200 mb-2">
                    Personal Developer Portfolio
                  </h4>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    A sleek and responsive portfolio website showcasing my
                    skills, projects, and professional experience. Built with
                    Next.js and styled with Tailwind CSS, it highlights dynamic
                    animations, modern design patterns, and mobile-first
                    responsiveness.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      Next.js
                    </span>
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      Tailwind CSS
                    </span>
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      React
                    </span>
                  </div>
                  <a
                    href="https://github.com/AbinAntony8888/PortfolioWebsite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded transition-colors duration-300"
                  >
                    <FaGithub size={16} />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>
         <div className="mt-12 ">
         <button className="flex float-left gap-2 border-2 border-red-600 bg-blue-600 ml-6 px-6 py-2 rounded-md hover:bg-blue-900 duration-300 transform hover:scale-x-110 download-cv">
          <a href="/abinantony it cv resume (2).pdf" className="gap-2 flex items-center justify-center" download>

            Download CV
          <FaDownload className="text-orange-200" />


          </a>
        </button>
         </div>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;



