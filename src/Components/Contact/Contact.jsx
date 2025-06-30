import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4neqrox", // replace
        "template_58k8zms", // replace
        form.current,
        "QKm5EQww0nYl7SBPE" // replace
      )
      .then(
        (result) => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="mt-12 md:mt-20 lg:mt-28 2xl:mt-36">
      <div className="relative inline-block">
        <h1 className="text-xl text-gray-200 font-semibold md:text-2xl lg:text-3xl 2xl:text-4xl ">
          Contact
        </h1>
        <motion.span
          className="absolute w-full h-[2px] -bottom-3 left-0 bg-blue-500 rounded-full"
          animate={{
            backgroundColor: ["#6b7280", "#3b82f6", "#6b7280"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      </div>
      <div className="mt-8 md:mt-6 lg:mt-10 flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10 xl:gap-12 2xl:gap-18">
        <div className="flex-1">
             <div className="space-y-6">
          <p className="text-gray-400">
            Feel free to reach out via WhatsApp, LinkedIn, or email. I’m open to
            collaboration, freelance, or just tech talk!
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MdLocationOn className="text-2xl text-green-400" />
              <span className="text-lg">Dhaka, Bangladesh</span>
            </div>

            <div className="flex items-center space-x-3">
              <FaLinkedin className="text-2xl text-blue-500" />
              <a
                href="https://www.linkedin.com/in/mohammad-raihan-gazi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/mohammad-raihan-gazi
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <FaWhatsapp className="text-2xl text-green-500" />
              <a
                href="https://wa.me/8801408507693"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +880 1408507693
              </a>
            </div>
          </div>
        </div>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <p className="mb-8 text-gray-400">
            Have a question or want to work together? Drop me a message!
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              className="w-full p-3 rounded bg-gray-800 text-white"
              type="text"
              placeholder="Your Name"
              name="user_name"
              required
            />
            <input
              className="w-full p-3 rounded bg-gray-800 text-white"
              type="email"
              placeholder="Your Email"
              name="user_email"
              required
            />
            <textarea
              className="w-full p-3 rounded bg-gray-800 text-white"
              rows="5"
              placeholder="Your Message"
              name="message"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded"
            >
              Send Message
            </button>
          </form>

          {success && (
            <p className="mt-4 text-green-400 font-semibold">
              ✔ Message sent successfully!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
