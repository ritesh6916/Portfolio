import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaJava } from "react-icons/fa6";
import { SiApachemaven } from "react-icons/si";
import { BsFiletypeJson, BsFiletypeXml } from "react-icons/bs";
import { SiMysql } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { CiCloudOn } from "react-icons/ci";
import { FaDatabase } from "react-icons/fa6";
import { SiPostman } from "react-icons/si"; 

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
          <FaJava className="text-7xl text-sky-600" />
          
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          id="technologies"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoSpringBoot className="text-7xl text-green-500" />
        </motion.div>
        
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          id="technologies"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BsFiletypeJson className="text-7xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          id="technologies"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BsFiletypeXml className="text-7xl text-pink-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          id="technologies"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaDatabase className="text-7xl text-orange-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.2)}
          initial="initial"
          animate="animate"
          id="technologies"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-sky-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          id="technologies"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiApachemaven className="text-7xl text-red-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          id="technologies"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPostman className="text-7xl text-[#EF5B25] bg-white rounded-full" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          id="technologies"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGithub className="text-7xl " />
        </motion.div>
        
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          id="technologies"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaAws className="text-7xl text-orange-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          id="technologies"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <VscAzure className="text-7xl text-orange-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          id="technologies"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <CiCloudOn className="text-7xl text-orange-500" />
        </motion.div>

        


      </motion.div>
    </div>
  );
};

export default Technologies;
