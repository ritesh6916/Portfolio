import { EDUCATIONS, CERTIFICATES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div id="other" className="border-b border-neutral-800 pb-24 pt-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-4xl text-center"
      >
        Education and Certificates
      </motion.h2>

      <div className="border-b border-neutral-800">
        <motion.h4
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
            className="my-20 text-3xl text-center"
        >
            Education
        </motion.h4>    
        {EDUCATIONS.map((edu, index) => (
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
              <h6 className="text-neutral-500">{edu.duration}</h6>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-4 font-bold">{edu.collegeName}</h6>
              <p className="mb-2 text-neutral-400">
                {edu.sem}
              </p>
              <p className="mb-2 text-neutral-400">
                {edu.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="text-center tracking-tighter flex flex-col justify-center items-center">
      <motion.h4
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-20 text-3xl text-center"
        >
            Course & Certifiates
        </motion.h4>
        <div className="flex flex-col justify-center items-start">
          {CERTIFICATES.map((certificate, index) => {
              return (
                  <div key={index} className="mb-6 flex flex-col items-start border-b border-neutral-800">
                    <motion.h6 
                      className="mb-2 font-bold text-start"
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: 100 }}
                      transition={{ duration: 1 }}
                    >{certificate.name}</motion.h6>
                    <motion.p 
                      className="mb-2 text-neutral-400"
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: -100 }}
                      transition={{ duration: 1 }}
                    >
                      {certificate.duration}
                    </motion.p>
                    {!certificate.verifyLink ? "" : (
                      <a href={certificate.verifyLink}>
                        <p className="mb-2 text-blue-400 underline">
                          Verify
                        </p>
                      </a>
                    )}
                  </div>
              )
          })}
        </div> 
      </div>
    </div>
  );
};

export default Experience;
