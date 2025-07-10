import ReviewOnScroll from '../ReviewOnScroll';

const Projects = () => {
  const projects = [
    {
      title: 'NoteAura - Note Taking App',
      description: 'A full-stack note-taking web app where users can add, tag, and delete notes with a clean UI and secure backend.',
      skills: ['React', 'Bootstrap', 'Express', 'MongoDB','Node.js'],
      link: 'https://mynoteaura.vercel.app/',
    },
    {
      title: 'AB Electrical Engineering Website',
      description: 'A professional business website for ABEE featuring responsive layout, service pages, and live SEO optimization.',
      skills: ['React', 'Bootstrap', 'SEO', 'Hosting'],
      link: 'https://abeepk.com/',
    },
    {
      title: 'Typing Speed Game',
      description: 'A browser-based game to test and improve your typing speed with real-time feedback and timer.',
      skills: ['JavaScript', 'HTML', 'CSS', 'Snap!'],
    },
    {
      title: 'Text Analysis App',
      description: 'A utility app that analyzes text input — showing word count, character count, and reading time.',
      skills: ['React', 'JavaScript', 'Bootstrap'],
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
