import ReviewOnScroll from "../ReviewOnScroll";

const About = () => {
  const frontendSkills = ["React", "JavaScript", "TailwindCSS", "Bootstrap", "HTML", "CSS"];
  const backendSkills = ["NodeJS", "ExpressJS", "MongoDB", "Python"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <ReviewOnScroll>
        <div className="max-w-4xl w-full mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-6 sm:p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">
              I'm a passionate web developer who enjoys building scalable web apps and coming up with creative
              solutions. I love turning complex problems into simple, effective experiences for users.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-white/5">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {frontendSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-md transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-white/5">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {backendSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-md transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education + Work Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm sm:text-base">
                <li>
                  <strong>B.S. Computer Engineering</strong> - University of Engineering and Technology, Lahore
                  (2024–2028)
                </li>
                <li>
                  Relevant Coursework: Data Structures & Algorithms, Web Development, Artificial Intelligence
                </li>
              </ul>
            </div>

            {/* Experience */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-4 text-gray-300 text-sm sm:text-base">
                <div>
                  <h4 className="font-semibold">Freelance Web Developer (Self-Employed)</h4>
                  <p>
                    I build responsive websites and dynamic web apps for clients using React, JavaScript, and modern
                    tools. My focus is always on clean code, usability, and performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};

export default About;
