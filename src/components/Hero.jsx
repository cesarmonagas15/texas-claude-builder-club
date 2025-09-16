import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="texas-text">Texas</span>
          <span className="claude-text">Claude Builder Club</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Building the future with AI in the Lone Star State 🤠
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={() => scrollToSection('join')}
            className="btn-primary"
          >
            Join the Club
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="btn-secondary"
          >
            Learn More
          </button>
        </motion.div>
      </div>

      <div className="hero-background">
        <motion.div
          className="floating-star"
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ⭐
        </motion.div>
        <motion.div
          className="floating-star star-2"
          animate={{
            y: [20, -20, 20],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          ✨
        </motion.div>
        <motion.div
          className="floating-star star-3"
          animate={{
            y: [-15, 15, -15],
            x: [-10, 10, -10]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          🌟
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;