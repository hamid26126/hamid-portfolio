import ReviewOnScroll from '../ReviewOnScroll';
import { IoIosPlay } from "react-icons/io";

const Projects = () => {
  const projects = [
  {
    youtubeId: "G5xEVAnV1uM",
    title: "NoteAura - Note Taking App",
    description:
      "A full-stack note-taking application that allows users to securely create, organize, tag, and manage notes with a clean responsive interface and RESTful backend.",
    skills: [
      "React",
      "Bootstrap",
      "Express.js",
      "MongoDB",
      "Node.js",
    ],
    link: "https://mynoteaura.vercel.app/",
  },
  {
    youtubeId: "AcewUaWMqdA",
    title: "AB Electrical Engineering Website",
    description:
      "A modern corporate website built for an engineering company featuring responsive design, SEO optimization, service showcases, and fast deployment for improved online presence.",
    skills: [
      "React",
      "Bootstrap",
      "SEO Optimization",
      "Hosting",
      "Deployment",
    ],
  },
  {
    youtubeId: "9zCpCPAa014",
    title: "Game Store – E-Commerce Platform",
    description:
      "A full-featured eCommerce platform for purchasing digital games with product management, secure Stripe payments, CMS-powered content, and a responsive shopping experience.",
    skills: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Strapi CMS",
      "Stripe",
      "REST APIs",
    ],
  },
  {
    youtubeId: "S-edrDVdbFc",
    title: "YouTube Video Uploader",
    description:
      "A full-stack web application that enables creators to upload videos directly to YouTube using Google OAuth authentication and the YouTube Data API.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "Google OAuth",
      "YouTube Data API",
      "REST API",
    ],
  },

  {
  youtubeId: "2SeozJ1w7D8",
  title: "CashMate - AI Personal Finance Manager",
  description:
    "A full-stack MERN application that helps users manage personal finances with AI-powered financial assistance, expense tracking, and automated reminders using scheduled notification services.",
  skills: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Groq API",
    "Cron Jobs"
  ],
},
{
  youtubeId: "bCalh3xGqWM",
  title: "PSL Command Center",
  description:
    "A Windows desktop application built to manage Pakistan Super League operations, including teams, players, matches, venues, seasons, auctions, and reporting through an intuitive administrative interface.",
  skills: [
    "C#",
    "WinForms",
    "MySQL",
    "RDLC Reports"
  ],
},
{
  youtubeId: "Z-OWBwe7ee8",
  title: "Employee Hierarchy Management System",
  description:
    "A Data Structures & Algorithms project that models an organization's reporting hierarchy using tree data structures and DFS traversal. Employee data is loaded from text files, enabling efficient hierarchy construction and traversal without a database.",
  skills: [
    "C++",
    "Data Structures",
    "Trees",
    "DFS",
    "File Handling",
    "Algorithms"
  ],
},
];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      {/* <ReviewOnScroll> */}
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg transition"
              >
                {project.youtubeId ? (
      <div className="mb-5 rounded-lg overflow-hidden aspect-video bg-black/40">
  <iframe
    src={`https://www.youtube.com/embed/${project.youtubeId}`}
    className="w-full h-full"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>


    ) : (
      <IoIosPlay className="text-5xl text-gray-500 cursor-pointer" />
    )}
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      {/* </ReviewOnScroll> */}
    </section>
  );
};

export default Projects;
