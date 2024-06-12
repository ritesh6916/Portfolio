import { CONTACT } from "../constants";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaRegFilePdf } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaHackerrank } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-800 pb-4 pt-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Get in
        <span className="text-neutral-500"> Touch</span>
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a
          href="#"
          className="border-b"
        >
          {CONTACT.email}
        </a>
      </div>

      <motion.div
        whileInView={{ opacity: 1, Y: 0 }}
        initial={{ opacity: 0, Y: 100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center text-2xl gap-4 px-3 py-10"
      >
        <a target="_blank" href="https://www.linkedin.com/in/ritesh-singh-533661190/" className="text-blue-600">
          <FaLinkedin />
        </a>
        <a target="_blank" href="https://github.com/ritesh6916">
          <FaGithub />
        </a>
        <a target="_blank" href="https://www.hackerrank.com/profile/RITESHSINGH0500" className="text-green-500">
        <FaHackerrank />
        </a>
        {/* <a target="_blank" href="#">
          <FaRegFilePdf />
        </a> */}
      </motion.div>
    </div>
  );
};

export default Contact;
