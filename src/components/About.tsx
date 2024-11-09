import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="md:w-1/2">
            <img
              src="/assets/profile.jpg"
              alt="Christy Maria Sebastian"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2 text-white">
            <h2 className="text-5xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 mb-6">
              I'm a BTech student specializing in Artificial Intelligence and Data Science, 
              passionate about creating innovative solutions at the intersection of AI and front-end web development. I’m a passionate developer with expertise in Python, React, HTML, and CSS, always eager to tackle unique challenges through innovative tech solutions. My recent projects focus on neural networks, deep learning, and computer vision, where I blend advanced technologies with practical applications. <br />
              <br />
              I’m currently seeking opportunities to work on exciting projects that allow me to leverage my skills in AI, data analysis, and web development to create impactful solutions.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors"
              >
                <Mail size={20} />
                Hire Me
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Christy Maria Sebastian NLP.pdf"
                download="Christy Maria Sebastian NLP"
                className="flex items-center gap-2 border border-red-600 text-white px-6 py-3 rounded-full hover:bg-red-600/10 transition-colors"
              >
                <Download size={20} />
                Download CV
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
