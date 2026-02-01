import { motion } from 'framer-motion';

const About = () => {
    const features = [
        {
            title: "Full-Stack Dev",
            desc: "Building seamless web applications with React, FastAPI, and Django."
        },
        {
            title: "Data Analysis",
            desc: "Transforming raw data into meaningful insights using Pandas and Visualization tools."
        },
        {
            title: "Real-Time Systems",
            desc: "Developing responsive, high-performance applications that react instantly."
        }
    ];

    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">About Me</h2>

                    <div className="about-grid">
                        <div className="about-text-column">
                            <p className="lead-text">
                                Tech enthusiast & Problem solver. I turn coffee into code and data into decisions.
                            </p>
                            <p className="main-text">
                                I am a passionate Computer Science Engineering student at <strong>Sitare University</strong>.
                                My journey in tech is driven by a curiosity to solve real-world problems.
                            </p>
                            <p className="main-text">
                                When I'm not coding, I'm exploring new technologies, contributing to open source, or learning about the latest trends in AI and Machine Learning.
                            </p>
                        </div>

                        <div className="features-column">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="feature-card"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    <h3 className="feature-title">{feature.title}</h3>
                                    <p className="feature-desc">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            <style>{`
        .about-section {
          background-color: transparent;
        }
        .section-title {
          text-align: center;
          margin-bottom: 60px;
          font-size: 2.5rem;
          background: linear-gradient(to right, #818cf8, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .about-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
        }

        .lead-text {
            font-size: 1.5rem;
            font-weight: 600;
            color: #fff;
            margin-bottom: 20px;
            line-height: 1.4;
        }

        .main-text {
            font-size: 1.1rem;
            color: var(--text-secondary);
            margin-bottom: 20px;
            line-height: 1.8;
        }

        .feature-card {
            background: rgba(30, 41, 59, 0.4);
            border: 1px solid rgba(255, 255, 255, 0.05);
            padding: 25px;
            margin-bottom: 20px;
            border-radius: 16px;
            transition: 0.3s;
        }

        .feature-card:hover {
            background: rgba(30, 41, 59, 0.7);
            border-color: var(--accent-primary);
            transform: translateX(5px);
        }

        .feature-title {
            font-size: 1.2rem;
            color: var(--accent-primary);
            margin-bottom: 8px;
        }

        .feature-desc {
            font-size: 0.95rem;
            color: var(--text-secondary);
        }
        
        strong {
            color: var(--accent-primary);
        }

        @media (max-width: 768px) {
            .about-grid {
                grid-template-columns: 1fr;
                gap: 40px;
            }
        }
      `}</style>
        </section>
    );
};

export default About;
