import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/ProfileImg.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay }, },
  
});

function Hero() {
  return (
    <div id="home" className="border-b border-neutral-900 pb-4 lg:mb-35 pt-[96px]">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Ritesh Singh
            </motion.h1>
            <motion.span 
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Java Backend Developer
            </motion.span>
            <motion.p 
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-10 font-light tracking-tighter text-center lg:text-start"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center">
            <motion.img initial={{x:100, opacity: 0}} animate={{x:0, opacity:1}} transition={{duration: 1, delay: 1.2}} src={profilePic} alt="Ritesh" className="h-[450px] lg:h-[500px] bg-cover bg-center rounded-2xl  w-[500px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
