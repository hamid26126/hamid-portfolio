import ReviewOnScroll from "../ReviewOnScroll";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-24 sm:pt-32"
    >
      <ReviewOnScroll>
        <div className="text-center z-10 w-full max-w-4xl">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Helping Startups Build Fast, Scalable Web Applications
          </h1>

          <p className="text-gray-300 text-base sm:text-lg leading-8 mb-8 px-2 sm:px-4">
            I'm <span className="text-white font-medium">Muhammad Hamid</span>, a
            MERN Stack Developer.
            I build full-stack web applications using React, Node.js, Express, and
            MongoDB, with experience integrating AI features, payment systems, and
            third-party APIs. Whether it's a startup MVP, an internal dashboard, or
            a production-ready web application, I focus on writing clean,
            maintainable code that solves real business problems.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">

            <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm">
              MERN Stack
            </span>

            <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm">
              React.js
            </span>

            <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm">
              Node.js
            </span>

            <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm">
              MongoDB
            </span>

            <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm">
              AI Integrations
            </span>

            <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm">
              REST APIs
            </span>

          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-400 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Let's Connect
            </a>

          </div>

        </div>
      </ReviewOnScroll>
    </section>
  );
};

export default Home;