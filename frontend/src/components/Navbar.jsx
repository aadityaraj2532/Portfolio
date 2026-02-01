import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
// We might need react-scroll for smooth scrolling within one page, or just use anchors
// Since I didn't install react-scroll yet, I'll use standard anchors for now or add react-scroll.
// User asked for "smooth animations", react-scroll is good for single page.
// I'll stick to basic anchors with css smooth-scroll for now to save installs, or just install it.
// Actually, standard a href="#id" works with scroll-behavior: smooth in CSS.

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: '#about' },
    { name: 'Skills', to: '#skills' },
    { name: 'Projects', to: '#projects' },
    { name: 'Contact', to: '#contact' },
  ];

  const handleScrollTo = (id) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Aaditya <span className="accent">Raj</span>
        </div>

        <div className="mobile-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <li key={index} className="nav-item">
              <span className="nav-link" onClick={() => handleScrollTo(link.to)}>
                {link.name}
              </span>
            </li>
          ))}
          <li className="nav-item">
            <a href="https://github.com/aadityaraj2532" target="_blank" rel="noreferrer" className="social-icon">
              <FaGithub />
            </a>
          </li>
          <li className="nav-item">
            {/* Placeholder for LinkedIn as it wasn't provided, or I can add it if I find it later */}
            <a href="https://www.linkedin.com/in/aaditya-raj-588b8b30b" target="_blank" rel="noreferrer" className="social-icon"><FaLinkedin /></a>
          </li>
        </ul>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 1200px;
          height: 70px;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
          transition: 0.3s all ease;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }
        
        .navbar.scrolled {
          background: rgba(15, 23, 42, 0.85);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          top: 10px;
          width: 95%;
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 0 30px;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          cursor: pointer;
          letter-spacing: -0.5px;
        }

        .accent {
          color: var(--accent-primary);
        }

        .nav-menu {
          display: flex;
          list-style: none;
          align-items: center;
          gap: 30px;
        }

        .nav-link {
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          position: relative;
          color: var(--text-secondary);
          transition: 0.3s;
        }

        .nav-link:hover {
          color: white;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          background: var(--accent-primary);
          bottom: -4px;
          left: 0;
          transition: 0.3s;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .social-icon {
          font-size: 1.2rem;
          cursor: pointer;
          transition: all 0.3s;
          color: var(--text-secondary);
        }

        .social-icon:hover {
          color: var(--accent-primary);
          transform: translateY(-2px);
        }

        .mobile-icon {
          display: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: white;
        }

        @media screen and (max-width: 768px) {
          .navbar {
            top: 0;
            left: 0;
            transform: none;
            width: 100%;
            border-radius: 0;
            border: none;
            background: rgba(10, 10, 10, 0.95);
          }
           .navbar.scrolled {
            top: 0;
            width: 100%;
          }

          .nav-menu {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100vh;
            position: absolute;
            top: 70px;
            left: -100%;
            background: var(--bg-primary);
            transition: all 0.5s ease;
            justify-content: flex-start;
            padding-top: 50px;
            align-items: center;
          }

          .nav-menu.active {
            left: 0;
          }

          .nav-item {
            margin: 15px 0;
          }

          .mobile-icon {
            display: block;
            z-index: 1000;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
