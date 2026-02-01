import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null); // 'success', 'error', 'loading'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // In production, use real endpoint
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
      await axios.post(`${apiUrl}/api/contact`, formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      console.error("Error submitting form", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Hello, I'd like to talk about..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="status-msg success">Message sent successfully!</p>
            )}

            {status === 'error' && (
              <p className="status-msg error">Failed to send message. Please try again.</p>
            )}
          </motion.form>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--bg-secondary);
        }
        .section-title {
          text-align: center;
          margin-bottom: 50px;
        }
        .contact-content {
          max-width: 600px;
          margin: 0 auto;
        }
        .contact-form {
          background: var(--bg-card);
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: var(--text-secondary);
        }
        .form-group input, 
        .form-group textarea {
          width: 100%;
          padding: 12px;
          background: var(--bg-primary);
          border: 1px solid #333;
          border-radius: 6px;
          color: white;
          font-family: inherit;
          transition: border-color 0.3s;
        }
        .form-group input:focus, 
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-primary);
        }
        .submit-btn {
          width: 100%;
        }
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .status-msg {
          margin-top: 15px;
          text-align: center;
          font-weight: 500;
        }
        .success { color: var(--success); }
        .error { color: var(--error); }
      `}</style>
    </section>
  );
};

export default Contact;
