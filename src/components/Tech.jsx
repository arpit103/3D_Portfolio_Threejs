import React from "react";
import { styles } from "../styles";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
 
  return ( 
    <div>
       <motion.div variants={textVariant()}>
 <p className={styles.sectionSubText}>
 My Skills
 </p>
 <h2 className={styles.sectionHeadText}>Technology</h2>
 </motion.div>
        

    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />  
        </div>    
))}
</div>

          
 {/* <div>
          <h1 className='text-white text-[24px] font-bold'>{technologies.name}</h1>
          </div> */}
   
    </div>
  );
};

export default SectionWrapper(Tech, "tech");