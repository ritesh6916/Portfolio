import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div id="experience" className="border-b border-neutral-800 pb-24 pt-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-4xl text-center"
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center border-b border-slate-900 pb-2 mx-2 lg:mx-10"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <h6 className="text-neutral-500">{experience.startDate} - {experience.endDate}</h6>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-4 font-bold">{experience.title} - {experience.company}</h6>
              <p className="mb-2 text-neutral-400">{experience.descriptions.map((des, index) => {
                return <p key={index} className="mb-2">{des}</p>
              })}</p>
              <div  className="flex gap-2 flex-wrap"> 
              {experience.technologies.map((tech, index) => (
               
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>

              
              ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
