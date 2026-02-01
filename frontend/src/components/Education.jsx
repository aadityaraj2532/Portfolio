import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="timeline">
          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="timeline-icon">
              <FaGraduationCap />
            </div>
            <div className="timeline-content">
              <span className="year">Completed</span>
              <h3 className="degree">Schooling</h3>
              <h4 className="institution">Jawahar Navodaya Vidyalaya</h4>
              <p className="description">
                Completed my schooling with a focus on science and mathematics.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="timeline-icon">
              <FaGraduationCap />
            </div>
            <div className="timeline-content">
              <span className="year">2024 - 2028 (Expected)</span>
              <h3 className="degree">B.Tech in Computer Science & Engineering</h3>
              <h4 className="institution">Sitare University</h4>
              <p className="description">
                Focusing on core CS fundamentals, Data Structures & Algorithms, Full Stack Development, and AI.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .education-section {
          background-color: var(--bg-primary);
        }
        .section-title {
          text-align: center;
          margin-bottom: 50px;
        }
        .timeline {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 20px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #333;
        }
        .timeline-item {
          display: flex;
          margin-bottom: 40px;
          padding-left: 60px;
          position: relative;
        }
        .timeline-icon {
          position: absolute;
          left: 0;
          top: 0;
          width: 40px;
          height: 40px;
          background: var(--accent-primary);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-size: 1.2rem;
          box-shadow: 0 0 0 4px var(--bg-primary);
        }
        .timeline-content {
          background: var(--bg-card);
          padding: 25px;
          border-radius: 12px;
          width: 100%;
        }
        .year {
          display: inline-block;
          font-size: 0.9rem;
          color: var(--accent-primary);
          margin-bottom: 10px;
          font-weight: 600;
        }
        .degree {
          font-size: 1.4rem;
          margin-bottom: 5px;
        }
        .institution {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 15px;
        }
        .description {
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
};

export default Education;
