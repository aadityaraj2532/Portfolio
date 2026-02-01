import { FaPython, FaJava, FaJs, FaHtml5, FaCss3, FaGitAlt, FaBrain, FaChartBar } from 'react-icons/fa';
import { SiFastapi, SiDjango, SiScikitlearn } from 'react-icons/si';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'Python', icon: <FaPython />, color: '#3776AB' },
    { name: 'Java', icon: <FaJava />, color: '#007396' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'Django', icon: <SiDjango />, color: '#092E20' },
    { name: 'FastAPI', icon: <SiFastapi />, color: '#009688' },
    { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS', icon: <FaCss3 />, color: '#1572B6' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'Machine Learning', icon: <SiScikitlearn />, color: '#F7931E' },
    { name: 'AI', icon: <FaBrain />, color: '#FF6384' },
    { name: 'Data Visualization', icon: <FaChartBar />, color: '#36A2EB' },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>{skill.icon}</div>
              <p className="skill-name">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          background-color: var(--bg-primary);
        }
        .section-title {
          text-align: center;
          margin-bottom: 50px;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 30px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .skill-card {
          background: var(--bg-card);
          backdrop-filter: blur(10px);
          padding: 30px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .skill-card:hover {
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-5px);
          border-color: var(--accent-primary);
        }
        .skill-icon {
          font-size: 3rem;
          margin-bottom: 15px;
        }
        .skill-name {
          font-weight: 600;
          font-size: 1.1rem;
        }
      `}</style>
    </section>
  );
};

export default Skills;
