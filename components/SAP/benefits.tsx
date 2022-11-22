import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Benefits.module.css';
import { motion } from 'framer-motion';

export default function Benefits() {
  return (
    <section className={styles.benefits}>
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: '-100px' }}
        transition={{ duration: 0.5 }}>
        What you should expect ?
      </motion.h2>



      <motion.div 
      transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          {/* <Image width={48} height={48} src='/compass.svg' alt='' />{' '} */}
          <p className="text-center">
            <b className='text-blue-500'>Get exclusive courses </b><br />
            From our single platform get access to original, curated and diversified topics to help you setup, manage and scale your business. 
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.3 }}>
          {/* <Image width={48} height={48} src='/chat.svg' alt='' /> */}
          <p className="text-center">
            <b className='text-blue-500'>Live training Sessions </b><br />
            Learn from our experts, mentors and peers through working sessions and webinars. We make sure you build a solid base to ensure your startup's growth acceleration.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          {/* <Image width={48} height={48} src='/users.svg' alt='' />{' '} */}
          <p className="text-center ">
            <b className='text-blue-500'>Hands-on Experiences </b><br />
            Driven entrepreneurship take action. We set weekly challenges to help you apply  what you've learned. You can share your progress with your mentors and other entrepreneurs.
          </p>
        </motion.div>
        {/* <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: '-100px' }}
        transition={{ duration: 0.5, delay: 0.5 }}>
        <Image width={48} height={48} src='/pie.svg' alt='' />{' '} 
        <p className="text-center mx-2">
          Get regular updates <br />
          with proper tutorials.
        </p>
      </motion.div> */}
      </motion.div>
    </section>
  );
}
