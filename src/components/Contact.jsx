import { motion } from 'framer-motion';
import './Contact.css';
import slackIcon from '../assets/slack-icon.png';
import gmailIcon from '../assets/gmail-icon.png';

const Contact = () => {
  const contactItems = [
    {
      icon: gmailIcon,
      label: 'Email',
      value: 'claudeattexas@gmail.com',
      link: 'mailto:claudeattexas@gmail.com'
    },
    {
      icon: slackIcon,
      label: 'Slack',
      value: 'Join our Slack',
      link: 'https://join.slack.com/t/texasclaudebu-epu2619/shared_invite/zt-3dk18atls-tUZ5i84w92ckWyURcpRTHQ'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="contact-info">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Connect With Us
            </motion.h3>

            <div className="contact-list">
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="contact-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img src={item.icon} alt={item.label} className="contact-icon" />
                    <div className="contact-details">
                      <span className="contact-label">{item.label}</span>
                      <span className="contact-value">{item.value}</span>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;