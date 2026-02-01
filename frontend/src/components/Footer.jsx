import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-logo">
                    Aaditya <span className="accent">Raj</span>
                </div>

                <div className="social-links">
                    <a href="https://github.com/aadityaraj2532" target="_blank" rel="noreferrer"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/aaditya-raj-588b8b30b" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                    <a href="mailto:adityajnvbanka15@gmail.com"><FaEnvelope /></a>
                </div>

                <p className="copyright">
                    © {new Date().getFullYear()} Aaditya Raj. Made with <FaHeart className="heart-icon" /> and Code.
                </p>
            </div>

            <style>{`
        .footer {
          background-color: var(--bg-secondary);
          padding: 40px 0;
          margin-top: 50px;
          border-top: 1px solid #333;
        }
        
        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        
        .footer-logo {
          font-size: 1.5rem;
          font-weight: 700;
        }
        
        .social-links {
          display: flex;
          gap: 20px;
        }
        
        .social-links a {
          font-size: 1.5rem;
          transition: color 0.3s;
        }
        
        .social-links a:hover {
          color: var(--accent-primary);
        }
        
        .copyright {
          color: var(--text-secondary);
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        .heart-icon {
          color: var(--error);
        }
      `}</style>
        </footer>
    );
};

export default Footer;
