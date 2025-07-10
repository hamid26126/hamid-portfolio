import ReviewOnScroll from '../ReviewOnScroll';

const Home = () => {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center px-4 pt-24 sm:pt-32'
    >
      <ReviewOnScroll>
        <div className='text-center z-10 w-full max-w-3xl'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight'>
            Hi, I'm a Web Developer
          </h1>

          <p className='text-gray-300 text-base sm:text-lg mb-8 px-2 sm:px-4'>
            I'm a passionate web developer who loves turning ideas into clean, responsive, and user-friendly websites. With experience in building modern web applications using technologies like React, Node.js, and MongoDB, I focus on both functionality and design. I enjoy solving problems, optimizing performance, and crafting smooth user experiences. Whether it's a static business site or a dynamic web app, I strive to deliver quality code and creative solutions. I'm always learning, growing, and building — one project at a time.
          </p>

          <div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
            <a
              href='#projects'
              className='bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'
            >
              View Projects
            </a>
            <a
              href='#contact'
              className='border border-blue-500/50 text-blue-400 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10'
            >
              Contact Me
            </a>
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};

export default Home;
