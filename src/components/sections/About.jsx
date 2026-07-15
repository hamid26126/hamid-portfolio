import ReviewOnScroll from "../ReviewOnScroll";

const About = () => {
  const frontendSkills = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Bootstrap",
    "HTML5",
    "CSS3",
    "Responsive Design",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "JWT Authentication",
    "Cron Jobs",
    "Strapi CMS",
  ];

  const databaseSkills = [
    "MongoDB",
    "MySQL",
    "SQL",
    "Database Design",
  ];

  const toolsSkills = [
    "Git",
    "GitHub",
    "Vercel",
    "Postman",
    "Figma",
    "Cloudinary",
    "Google OAuth",
    "Groq API",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8"
    >
      <ReviewOnScroll>
        <div className="max-w-5xl w-full mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-6 sm:p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">
              I'm <span className="text-white font-semibold">Muhammad Hamid</span>, a passionate MERN Stack
              Developer who enjoys building scalable, user-focused web applications.
              I love transforming ideas into real products by combining clean
              frontend experiences with robust backend systems.
            </p>

            <p className="text-gray-300 mb-8 text-base sm:text-lg leading-relaxed">
              Over the past few years, I've built full-stack applications ranging
              from AI-powered finance platforms and e-commerce solutions to business
              websites and management systems. I'm always exploring modern
              technologies, solving challenging problems, and continuously improving
              my development skills while contributing to student communities and
              real-world projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="rounded-xl p-6 border border-white/5 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>

                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 border border-white/5 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>

                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 border border-white/5 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Databases</h3>

                <div className="flex flex-wrap gap-2">
                  {databaseSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 border border-white/5 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Tools & Technologies</h3>

                <div className="flex flex-wrap gap-2">
                  {toolsSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Education + Experience */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>

              <ul className="list-disc list-inside text-gray-300 space-y-3">

                <li>
                  <strong>B.S. Computer Engineering</strong>
                  <br />
                  University of Engineering & Technology (UET), Lahore
                  <br />
                  <span className="text-gray-400">2024 – 2028</span>
                </li>

                <li>
                  Relevant Coursework: Data Structures & Algorithms, Database
                  Systems, Object-Oriented Programming, Artificial Intelligence,
                  Operating Systems, Software Engineering, Web Development.
                </li>

              </ul>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">

              <h3 className="text-xl font-bold mb-4">Experience</h3>

              <div className="space-y-6 text-gray-300">

                <div>
                  <h4 className="font-semibold text-white">
                    Web Development Lead — ACM UET Lahore
                  </h4>

                  <p className="mt-1">
                    Leading the Web Development team by mentoring members,
                    organizing technical sessions, reviewing projects, and helping
                    students build modern full-stack web applications.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    Software Development Intern — Department of Computer Engineering,
                    UET Lahore
                  </h4>

                  <p className="mt-1">
                    Completed a six-month internship where I contributed to the
                    development of a Point of Sale (POS) system, collaborated with
                    senior developers, and gained practical experience in building
                    production-oriented software solutions.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    Freelance MERN Stack Developer
                  </h4>

                  <p className="mt-1">
                    Developed full-stack web applications and business websites for
                    clients, focusing on responsive UI, REST APIs, authentication,
                    performance optimization, and deployment using modern web
                    technologies.
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