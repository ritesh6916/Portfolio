import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaJava } from "react-icons/fa6";
import { SiApachemaven } from "react-icons/si";
import { BsFiletypeJson } from "react-icons/bs";
import { SiMysql } from "react-icons/si";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div id="technologies" className="border-b border-neutral-800 pb-24 pt-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{opacity: 0, y:-100}}
        transition={{duration: 1.5}}
        className="my-20 text-4xl text-center"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          id="technologies"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoSpringBoot className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          id="technologies"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaJava className="text-7xl text-sky-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          id="technologies"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiApachemaven className="text-7xl text-red-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          id="technologies"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BsFiletypeJson className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          id="technologies"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-sky-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          id="technologies"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGithub className="text-7xl " />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
