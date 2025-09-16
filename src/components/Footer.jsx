import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p>&copy; 2024 Texas Claude Builder Club. Built with ❤️ in Texas. 🤠</p>
        <div className="footer-links">
          <span>Howdy, y'all! 👋</span>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;