import { motion } from 'framer-motion';
import './Join.css';

const Join = () => {
  return (
    <section id="join" className="join-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Join Our Community
        </motion.h2>

        <motion.p
          className="join-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Ready to build the future? Join the Texas Claude Builder Club today and connect with fellow AI enthusiasts!
        </motion.p>

        <motion.div
          className="form-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://forms.gle/9MtP5SQrruyu18LN8"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Texas Claude Builder Club Registration"
            className="google-form"
          >
            Loading…
          </iframe>

          <motion.div
            className="form-fallback"
            whileHover={{ scale: 1.05 }}
          >
            <p>Can't see the form?</p>
            <a
              href="https://forms.gle/9MtP5SQrruyu18LN8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Open Form in New Tab 🚀
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Join;