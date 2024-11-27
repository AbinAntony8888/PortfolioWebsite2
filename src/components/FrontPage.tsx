// export default function FrontPage(){
//     return(
//         <div>
//             <h1>abin antony</h1>
//         </div>
//     )
// }

import React from "react";

const FrontPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white">
        
      {/* Name and Profession */}
      <img
        src="/abinnewphoto.JPG"
        alt="loading.."
        className="rounded-full border-4 border-blue-400 w-40 mb-8"
      />
      <h1 className="text-4xl font-bold mb-2">Abin Antony</h1>
      <p className="text-xl text-gray-300 mb-6">Full Stack Developer</p>

      {/* Links Section */}
      <div className="flex space-x-4 mb-8">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 border-2 px-2 bg-gray-700 hover:bg-gray-600"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://stackoverflow.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Stack Overflow
        </a>
        <a
          href="https://discord.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Discord
        </a>
        <a
          href="mailto:abin.antony@example.com"
          className="text-blue-400 hover:underline"
        >
          Email
        </a>
      </div>

      {/* Experience Section */}
      <div className="max-w-xl text-center">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <p className="text-gray-400">
          Hi, I am Abin Antony, a passionate full-stack developer with expertise
          in modern web technologies. I specialize in creating dynamic,
          responsive, and user-friendly applications. With a focus on scalable
          solutions and optimized performance, I bring a blend of technical
          skill and creative problem-solving to every project.
        </p>
        <p className="text-gray-400 mt-4">
          Looking forward to connecting and collaborating on impactful projects!
        </p>
      </div>
    </div>
  );
};

export default FrontPage;


{/* Projects Section */}
<section>
<h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
  <span className="w-8 h-1 bg-blue-500"></span>
  Featured Projects
</h2>
<div className="grid md:grid-cols-2 gap-8">
  {[1, 2].map((project) => (
    <div
      key={project}
      className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors duration-300"
    >
      <div className="aspect-video bg-gray-800">
        {/* Project thumbnail would go here */}
        <a href="https://github.com/AbinAntony8888/chatappBackendnode">https://github.com/AbinAntony8888/chatappBackendnode</a>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-blue-400">
          Project {project}
        </h3>
        <p className="text-gray-300 mb-4">
          A brief description of the project and its key features.
        </p>
        <div className="flex gap-2">
          <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
            React
          </span>
          <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
            Node.js
          </span>
        </div>
      </div>
    </div>
  ))}
</div>
</section>