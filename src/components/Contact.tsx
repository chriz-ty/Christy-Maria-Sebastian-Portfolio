import { motion } from 'framer-motion';
import { Mail, MapPin, Book } from 'lucide-react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Send the form data using EmailJS
    emailjs
      .sendForm(
        'service_1kkft2o', // Your service ID from EmailJS
        'template_ft6wvqr', // Your template ID from EmailJS
        e.target as HTMLFormElement, // Pass the form element
        '8OP27AOiAMAd2_Ovg' // Your user ID from EmailJS
      )
      .then(
        (result) => {
          console.log('Message sent successfully', result.text);
          // Optionally, reset the form
          (e.target as HTMLFormElement).reset();
        },
        (error) => {
          console.error('Error sending message', error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400">Let's work together</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                <Mail className="text-red-500" />
              </div>
              <div>
                <h3 className="text-white font-medium">Email</h3>
                <p className="text-gray-400">christymariasebastian0703@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                <Book className="text-red-500" />
              </div>
              <div>
                <h3 className="text-white font-medium">B Tech, Artificial Intelligence and Data Science</h3>
                <p className="text-gray-400">Semester 8, Final Year</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                <MapPin className="text-red-500" />
              </div>
              <div>
                <h3 className="text-white font-medium">St. Joseph's College of Engineering and Technology</h3>
                <p className="text-gray-400">Palai, Kottayam</p>
                <p className="text-gray-400">Kerala, India</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={sendEmail} // Attach the sendEmail function to form submission
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                name="user_name" // Corresponding to the EmailJS template
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-zinc-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <div>
              <input
                type="email"
                name="user_email" // Corresponding to the EmailJS template
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-zinc-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <div>
              <textarea
                name="message" // Corresponding to the EmailJS template
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-zinc-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
