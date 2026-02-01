import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="greeting">Hello, I'm</h2>
            <h1 className="name">Aaditya Raj</h1>
            <h3 className="title">Computer Science Engineering Student</h3>
            <p className="tagline">"Building data-driven and full-stack solutions"</p>

            <div className="cta-buttons">
              <a href="#projects" className="btn btn-primary" onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}>View Projects</a>
              <a href="#contact" className="btn btn-outline" onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}>Contact Me</a>
            </div>
          </motion.div>

          <motion.div
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="image-wrapper"
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <img src="/profile.jpg" alt="Aaditya Raj" className="profile-img" />
              <div className="glow-effect"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: transparent;
          padding-top: 80px; /* Navbar height */
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }

        .hero-text {
          max-width: 600px;
        }

        .greeting {
          font-size: 1.5rem;
          color: var(--accent-primary);
          margin-bottom: 10px;
          font-weight: 600;
        }

        .name {
          font-size: 4.5rem;
          margin-bottom: 15px;
          background: linear-gradient(to right, #fff, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.1;
        }

        .title {
          font-size: 1.8rem;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }

        .tagline {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 40px;
          font-style: italic;
          opacity: 0.9;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
        }

        .hero-image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .image-wrapper {
          position: relative;
          z-index: 2;
        }

        .profile-img {
          width: 350px;
          height: 350px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid var(--accent-primary);
          box-shadow: 0 0 50px rgba(99, 102, 241, 0.3);
          position: relative;
          z-index: 2;
        }

        .glow-effect {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%);
          z-index: 1;
          filter: blur(20px);
        }

        @media (max-width: 968px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
            flex-direction: column-reverse; /* Usually we want text first, but if user wants image top on mobile we can switch. Standard is Image then text or Text then Image. Let's do Image Top for profile focus or Text top. Let's keep Text top as in code order (grid-template-columns 1fr makes them stack). */
          }

          .hero-grid {
            display: flex;
            flex-direction: column-reverse; /* Image on top on mobile? Or text? Let's do Text First usually, but for profiles often Image First. Let's try Image First on mobile. */
          }

          .hero-grid {
             flex-direction: column-reverse; /* Image is second child, so column-reverse puts it first */
          }

          .hero-text {
            margin: 0 auto;
            align-items: center;
            display: flex;
            flex-direction: column;
          }

          .profile-img {
            width: 250px;
            height: 250px;
          }
          
          .glow-effect {
             width: 300px;
             height: 300px;
          }

          .name {
            font-size: 3rem;
          }
          
          .cta-buttons {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
