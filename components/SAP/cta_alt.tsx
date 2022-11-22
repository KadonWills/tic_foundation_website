import React from 'react';
import styles from '../../styles/CTAALT.module.css';
import { motion } from 'framer-motion';

export default function ctaAlt() {
  return (
    <section className={styles.cta}>
      <div>
        <motion.img
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className='w-20 h-20 mx-auto lg:mx-0'
          src='/img/users.svg'
          alt='user'
        />
        <motion.h3
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.3 }}>
          Join as a mentor<br /> & help them grow
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className=''>
          
          
        </motion.p>
        <motion.div
          className='lg:w-max'
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.7 }}>
          <motion.a
          href="mailto:aghabill@tic-foundation.org"
          whileHover={{ scale: 1.1, borderRadius: '50px' }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className={styles.left}>
            Contact Us
          </motion.a>
        </motion.div>
      </div>
      <div>
        <motion.img
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className='w-20 h-20 mx-auto lg:mx-0'
          src='/img/chat.svg'
          alt='user'
        />
        <motion.h3
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.3 }}>
          Still have more questions? <br />
          Contact us now.
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className=''>
        
        </motion.p>
        <motion.div
          className='lg:w-max'
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.7 }}>
          <motion.a
          href="mailto:aghabill@tic-foundation.org"
            whileHover={{ scale: 1.1, borderRadius: '50px' }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className={styles.right}>
            Frequently Asked Questions
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
