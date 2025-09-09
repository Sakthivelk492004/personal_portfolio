import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6jqypys', 'template_yaaoluw', form.current, 'ly_nVFO9rdZJp_bHB')
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  const inputVariants = {
    focus: { scale: 1.05, borderColor: '#6b7280', transition: { duration: 0.3 } }, // Gray-500
    hover: { scale: 1.02, borderColor: '#374151', transition: { duration: 0.3 } }, // Gray-700
    initial: { scale: 1, borderColor: '#d1d5db' } // Gray-300
  };
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>

      <div className="  max-w-md mx-auto">
        <form className="space-y-6 " ref={form} onSubmit={sendEmail}>
          <motion.input
            type="text"
            className="w-full p-3 border border-gray-300 bg-neutral-100 text-neutral-900 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            placeholder="Your Name"
            name="your_name"
            aria-label="Your Name"
            required
            variants={inputVariants}
            initial="initial"
            whileFocus="focus"
            whileHover="hover"
          />
          <motion.input
            type="email"
            className="w-full p-3 border border-gray-300 bg-neutral-100 text-neutral-900 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            placeholder="Your Email"
            name="your_email"
            aria-label="Your Email"
            required
            variants={inputVariants}
            initial="initial"
            whileFocus="focus"
            whileHover="hover"
          />
          <motion.textarea
            className="w-full p-3 border border-gray-300 bg-neutral-100 text-neutral-900 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            name="message"
            rows="5"
            placeholder="Your Message"
            aria-label="Your Message"
            required
            variants={inputVariants}
            initial="initial"
            whileFocus="focus"
            whileHover="hover"
          ></motion.textarea>
          <motion.button
            type="submit"
            value="Send"
            className="w-full p-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-transform duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </form>
      </div>
    </div>
  );
  };

export default EmailForm;
