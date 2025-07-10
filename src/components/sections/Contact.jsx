import { useState } from 'react';
import ReviewOnScroll from '../ReviewOnScroll';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert('Message Sent!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => alert('Oops! Something went wrong. Please try again.'));
  };

  return (
    <section id="contact" className="min-h-screen flex justify-center items-center py-20 px-4 sm:px-6 lg:px-8">
      <ReviewOnScroll>
  <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
    <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
      Get in Touch
    </h2>

    <form className="w-full md:w-150 space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="sr-only">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          required
          className="w-full bg-white/5 border border-white/10 rounded px-6 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10"
          placeholder="Your Name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          required
          className="w-full bg-white/5 border border-white/10 rounded px-6 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10"
          placeholder="you@example.com"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          required
          rows={5}
          className="w-full bg-white/5 border border-white/10 rounded px-6 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 resize-none"
          placeholder="Your Message..."
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white cursor-pointer py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
      >
        Send Message
      </button>
    </form>
  </div>
</ReviewOnScroll>

    </section>
  );
};

export default Contact;
