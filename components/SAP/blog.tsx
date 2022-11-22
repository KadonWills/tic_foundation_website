import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Blog.module.css';
import { motion } from 'framer-motion';

export default function Blog() {
  return (
    <section className={styles.blog}>
      <motion.h3
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: '-100px' }}
        transition={{ duration: 0.5 }}>
        Featured Courses
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: '-100px' }}
        transition={{ duration: 0.5, delay: 0.3 }}>
        <picture>
          <source srcSet='/img/blog_1.webp' type='image/webp' />
          <source srcSet='/img/blog_1.jpeg' type='image/jpeg' />
          <img className='w-full' src='/img/blog_1.jpeg' alt='seo' />
        </picture>
        <div className={styles.cardContent}>
          <h4>Why do most startups fail</h4>
          <p>
            1 in 10 , that's theportion of startups that fail to see their 10th birthday. why do these startups in Africa and around f...
          </p>
          <div>
            <small>
              <Image src='/user.svg' width={16} height={16} alt='lorem' /> Basic
            </small>
            <small>
              <Image src='/img/time.svg' width={16} height={16} alt='lorem' /> 30
              min read
            </small>
          </div>
        </div>
      </motion.div>
    
      {/* <motion.a
        whileHover={{ opacity: 1, scale: 1.2 }}
        className='opacity-70'
        href='#'>
        Discover 148 More Courses
        <motion.svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-6 h-6 inline ml-2'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
          />
        </motion.svg>
      </motion.a> */}
    </section>
  );
}
