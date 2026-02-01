import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In production, use env variable for API URL
    const fetchProjects = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
        const response = await axios.get(`${apiUrl}/api/projects`);
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects, using fallback data", error);
        // Fallback data if backend is not running
        setProjects([
          {
            title: "Real-Time YouTube Trending Analyzer",
            description: "Analyzes trending YouTube videos in real-time.",
            tech_stack: ["Python", "Data Analysis"],
            github_url: "https://github.com/aadityaraj2532"
          },
          {
            title: "Crypto Dashboard",
            description: "Visualizes cryptocurrency data and trends.",
            tech_stack: ["React", "Chart.js", "API"],
            github_url: "https://github.com/aadityaraj2532/CryptoViz"
          },
          {
            title: "Fake News Detector",
            description: "ML model to detect fake news articles.",
            tech_stack: ["Python", "Machine Learning"],
            github_url: "https://github.com/aadityaraj2532"
          },
          {
            title: "Movie Recommendation System",
            description: "Recommends movies based on user preferences.",
            tech_stack: ["Python", "ML", "Pandas"],
            github_url: "https://github.com/aadityaraj2532/Movie-Recommendation-System"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        {loading ? (
          <p className="loading">Loading projects...</p>
        ) : (
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="tech-stack">
                    {project.tech_stack.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="card-links">
                    <a href={project.github_url} target="_blank" rel="noreferrer" className="link-btn">
                      <FaGithub /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .projects-section {
          background-color: var(--bg-secondary);
        }
        .section-title {
          text-align: center;
          margin-bottom: 50px;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        .project-card {
          background: var(--bg-card);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(255, 255, 255, 0.1);
          height: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .project-card:hover {
          transform: translateY(-8px);
          border-color: var(--accent-primary);
          box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
        }
        .card-content {
          padding: 30px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .project-title {
          font-size: 1.5rem;
          margin-bottom: 12px;
          color: #fff;
          font-weight: 700;
        }
        .project-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          margin-bottom: 24px;
          flex-grow: 1;
          line-height: 1.6;
        }
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }
        .tech-tag {
          font-size: 0.75rem;
          background: rgba(129, 140, 248, 0.1);
          color: var(--accent-primary);
          padding: 6px 14px;
          border-radius: 50px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        .card-links {
          display: flex;
          gap: 15px;
        }
        .link-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          color: white;
          transition: color 0.3s;
        }
        .link-btn:hover {
          color: var(--accent-primary);
        }
        .loading {
          text-align: center;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
};

export default Projects;
