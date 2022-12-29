import React from 'react';
import styles from '../../styles/Hero.module.css';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className='[mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] absolute bottom-[-100px] md:w-[800px] md:h-[800px] lg:top-[280px] lg:right-[-100px] xl:right-0 w-[500px] h-[500px] 2xl:w-[1026px] 2xl:h-[1026px]'>
        <svg
          viewBox='0 0 1026 1026'
          fill='none'
          aria-hidden='true'
          className='absolute inset-0 h-full w-full animate-spin-slow'>
          <path
            d='M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z'
            stroke='#D4D4D4'
            strokeOpacity='0.7'></path>
          <path
            d='M513 1025C230.23 1025 1 795.77 1 513'
            stroke='url(#:R65m:-gradient-1)'
            strokeLinecap='round'></path>
          <defs>
            <linearGradient
              id=':R65m:-gradient-1'
              x1='1'
              y1='513'
              x2='1'
              y2='1025'
              gradientUnits='userSpaceOnUse'>
              <stop stopColor='#f8fafc'></stop>
              <stop offset='1' stopColor='#f8fafc' stopOpacity='0'></stop>
            </linearGradient>
          </defs>
        </svg>
        <svg
          viewBox='0 0 1026 1026'
          fill='none'
          aria-hidden='true'
          className='absolute inset-0 h-full w-full animate-spin-slow'>
          <path
            d='M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z'
            stroke='#D4D4D4'
            strokeOpacity='0.7'></path>
          <path
            d='M913 513c0 220.914-179.086 400-400 400'
            stroke='url(#:R65m:-gradient-2)'
            strokeLinecap='round'></path>
          <defs>
            <linearGradient
              id=':R65m:-gradient-2'
              x1='913'
              y1='513'
              x2='913'
              y2='913'
              gradientUnits='userSpaceOnUse'>
              <stop stopColor='#f8fafc'></stop>
              <stop offset='1' stopColor='#f8fafc' stopOpacity='0'></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className='w-full'>
        <motion.p
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}>
          Accelerate your startup with our
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={styles.title}>
          TiC StartUp <span className='text-[40px]   animate-bounce duration-1000'>🚀</span>  Accelerator 
          Program.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={styles.desc}>
          A program for Cameroonian entrepreneurs in tech. <br /> Learn the secrets to entrepreneurial success from those who've already made it. Join our community of impact-driven founders from around the country.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className={styles.cta }>
          <motion.a
            className="px-3 py-2 bg-neutral-50 hover:cursor-pointer text-blue-700 horver:bg-yellow-600 horver:text-slate-900 font-medium rounded-full w-full lg:w-max mt-8 lg:mt-0"
            href='https://docs.google.com/forms/d/1m3S9AKbFxEXd2VIdyampszRbF_UNP-7IK8n3JeDipi4' target={'_blank'}
            whileHover={{ scale: 1.1, borderRadius: '50px' }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}>
            Join The Program Now
          </motion.a>
        </motion.div>
      </div>
      <motion.div
        // className="absolute right-0 w-max"
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}>
        <picture>
          <source srcSet='/img/guys.png' type='image/png' />
          <img className='z-50 w-[360px] h-[360px] scale-125 animate-pulse rounded-full object-contain object-center' src='/img/guys.png' alt='' />
        </picture>
      </motion.div>

      <div className='w-max font-bold text-xs uppercase px-4 py-2 bg-red-600 text-slate-200 rounded-sm absolute top-[18px] left-[98%] -translate-x-1/2   rotate-90'> 100% Free </div>
    </section>
  );
}
