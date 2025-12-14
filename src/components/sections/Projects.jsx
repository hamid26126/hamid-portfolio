import ReviewOnScroll from '../ReviewOnScroll';
import { IoIosPlay } from "react-icons/io";

const Projects = () => {
  const projects = [
    {
      youtubeId: "G5xEVAnV1uM",
      title: 'NoteAura - Note Taking App',
      description: 'A full-stack note-taking web app where users can add, tag, and delete notes with a clean UI and secure backend.',
      skills: ['React', 'Bootstrap', 'ExpressJS', 'MongoDB','Node.js'],
      link: 'https://mynoteaura.vercel.app/',
    },
    {
      youtubeId: "AcewUaWMqdA",
      title: 'AB Electrical Engineering Website',
      description: 'A professional business website for ABEE featuring responsive layout, service pages, and live SEO optimization.',
      skills: ['React', 'Bootstrap', 'SEO Optimization', 'Hosting & Deployment'],
      link: 'https://abeepk.com/',
    },
    {
      youtubeId: "9zCpCPAa014",
      title: 'Game Store – E-Commerce Web App',
      description: 'A modern eCommerce platform where users can browse and purchase video games with integrated payment gateway support.',
      skills: ['React', 'JavaScript', 'TailwindCSS', 'HTML','Strapi CMS','Stripe'],
    },
    {
      youtubeId: "S-edrDVdbFc",
      title: 'YouTube Video Uploader Web Application',
      description: 'A lightweight full-stack web application that allows users to upload videos directly to their YouTube channel using Google OAuth, providing a simple and beginner-friendly upload experience.',
      skills: ['React.js', 'Node.js & Express.js', 'Google OAuth 2.0','YouTube Data API','REST API Integration'],
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <ReviewOnScroll>
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
      </ReviewOnScroll>
    </section>
  );
};

export default Projects;
