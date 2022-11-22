import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Features.module.css';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section className={styles.features}>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className={styles.imageWrapper}>
          <div>
            <Image layout='fill' src='/img/women.webp' />
          </div>
          <svg
            width='100'
            height='100'
            className='absolute hidden -right-10 top-10 animate-extra-spin-slow'
            viewBox='0 0 54 54'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M39 27C39 33.6274 33.6274 39 27 39C20.3726 39 15 33.6274 15 27C15 20.3726 20.3726 15 27 15C33.6274 15 39 20.3726 39 27Z'
              fill='#facc15'
            />
            <path
              d='M49.01 34.9426L45.2653 32.3199L45.4729 31.7117L49.1474 31.8874L46.1444 29.7442L46.344 29.1399L50.9025 29.3976L50.7051 29.976L46.8721 29.6796L50.0539 31.8839L49.8464 32.4921L46.009 32.2475L49.2095 34.3583L49.01 34.9426Z'
              fill='black'
            />
            <path
              d='M47.1375 38.1674L45.9257 37.339L45.0226 38.66L44.6326 38.3933L45.5357 37.0723L44.2874 36.219L43.2777 37.6961L42.8876 37.4294L44.2209 35.4791L47.8511 37.9607L46.5179 39.9111L46.1278 39.6444L47.1375 38.1674Z'
              fill='black'
            />
            <path
              d='M38.5809 43.3031L40.1892 42.2632L39.9552 41.2516L40.4631 40.9232L41.5006 45.4515L40.9451 45.8107L37.2465 43.0031L37.7544 42.6747L38.5809 43.3031ZM38.9716 43.6057L40.8423 45.0368L40.3048 42.7436L38.9716 43.6057Z'
              fill='black'
            />
            <path
              d='M33.4338 44.8868L34.9983 46.2542L35.655 46.0328L35.0815 44.3314L35.6248 44.1483L37.0274 48.3093L35.6842 48.7621C35.3697 48.8681 35.087 48.9036 34.8358 48.8686C34.5807 48.8349 34.3685 48.7446 34.1994 48.5978C34.0302 48.4509 33.906 48.2601 33.8269 48.0253C33.7303 47.7387 33.7287 47.4578 33.822 47.1826C33.9114 46.9087 34.1092 46.6802 34.4154 46.4972L32.7831 45.1062L33.4338 44.8868ZM35.8019 46.4686L35.002 46.7383C34.7074 46.8376 34.5107 46.9837 34.4117 47.1766C34.3141 47.3735 34.3062 47.5933 34.3881 47.8361C34.4712 48.0829 34.6093 48.2491 34.8021 48.3348C34.991 48.4218 35.2347 48.415 35.5332 48.3144L36.3332 48.0447L35.8019 46.4686Z'
              fill='black'
            />
            <path
              d='M31.1633 49.6465L31.0333 48.1843L29.4394 48.3261L29.3976 47.8554L30.9915 47.7137L30.8575 46.2076L29.0754 46.3661L29.0335 45.8955L31.3867 45.6862L31.7762 50.0663L29.423 50.2756L29.3812 49.805L31.1633 49.6465Z'
              fill='black'
            />
            <path
              d='M20.1041 48.0419C20.1282 48.3246 20.224 48.5714 20.3915 48.7823C20.5577 48.9971 20.7842 49.1584 21.0713 49.2661C21.3584 49.3738 21.643 49.4044 21.9251 49.3577C22.2019 49.3135 22.4536 49.1927 22.6803 48.9951C22.9015 48.8 23.0726 48.5412 23.1936 48.2187C23.3146 47.8963 23.356 47.5888 23.3177 47.2963C23.2755 47.0024 23.1654 46.7457 22.9875 46.5265C22.8042 46.3096 22.569 46.1474 22.2819 46.0397C21.8808 45.8892 21.5055 45.8852 21.156 46.0277C20.8065 46.1701 20.5333 46.4378 20.3366 46.8305L21.9764 47.4458L21.8126 47.8822L19.6007 47.0523L19.7556 46.6394C19.914 46.313 20.1367 46.0422 20.4238 45.8269C20.7095 45.6156 21.0307 45.4827 21.3876 45.4282C21.7431 45.3777 22.1017 45.4203 22.4634 45.556C22.8449 45.6991 23.1597 45.9182 23.4079 46.2132C23.6546 46.5121 23.8106 46.8555 23.8759 47.2434C23.9372 47.6297 23.8927 48.0235 23.7422 48.4246C23.5917 48.8257 23.3662 49.1515 23.0658 49.4022C22.76 49.6553 22.4166 49.8113 22.0356 49.8702C21.6532 49.9331 21.2712 49.8929 20.8898 49.7498C20.4533 49.586 20.1085 49.3333 19.8554 48.9916C19.5984 48.6484 19.467 48.2514 19.4612 47.8007L20.1041 48.0419Z'
              fill='black'
            />
            <path
              d='M16.2705 42.6879L16.0752 44.7565L16.6385 45.1601L17.6841 43.7004L18.1502 44.0343L15.5931 47.604L14.4408 46.7786C14.171 46.5854 13.977 46.3766 13.8586 46.1524C13.7369 45.9257 13.6862 45.7008 13.7065 45.4777C13.7268 45.2546 13.8091 45.0423 13.9534 44.8408C14.1295 44.595 14.3565 44.4296 14.6344 44.3445C14.9089 44.257 15.2099 44.284 15.5373 44.4255L15.7123 42.288L16.2705 42.6879ZM16.3707 45.534L15.6844 45.0424C15.4318 44.8614 15.1982 44.7871 14.9839 44.8195C14.767 44.8554 14.584 44.9774 14.4348 45.1857C14.2832 45.3974 14.229 45.6065 14.2721 45.8131C14.3119 46.0173 14.4598 46.211 14.7159 46.3945L15.4022 46.8861L16.3707 45.534Z'
              fill='black'
            />
            <path
              d='M12.9312 39.9141C13.1685 40.2453 13.3081 40.6025 13.3501 40.9857C13.3887 41.3713 13.3272 41.7435 13.1656 42.102C12.9981 42.4597 12.7402 42.7632 12.392 43.0127C12.0437 43.2621 11.675 43.4074 11.286 43.4484C10.891 43.4885 10.5189 43.427 10.1696 43.2639C9.81687 43.1033 9.52189 42.8573 9.28465 42.5261C9.04497 42.1915 8.90583 41.8314 8.86723 41.4457C8.82522 41.0625 8.88624 40.6933 9.0503 40.3382C9.21437 39.983 9.47224 39.6794 9.82392 39.4275C10.1756 39.1756 10.546 39.0291 10.9351 38.9881C11.3241 38.947 11.695 39.0068 12.0478 39.1675C12.3971 39.3306 12.6916 39.5794 12.9312 39.9141ZM12.5266 40.2039C12.3481 39.9546 12.1299 39.7726 11.8719 39.6577C11.6115 39.5394 11.3334 39.5009 11.0376 39.5423C10.7393 39.5803 10.4485 39.7008 10.1651 39.9038C9.8783 40.1093 9.67062 40.3459 9.54209 40.6136C9.40769 40.8804 9.35337 41.1543 9.37914 41.4355C9.4049 41.7167 9.50827 41.9836 9.68926 42.2363C9.87025 42.489 10.0897 42.6727 10.3477 42.7876C10.6056 42.9025 10.8837 42.941 11.182 42.903C11.4744 42.864 11.764 42.7418 12.0508 42.5364C12.3342 42.3334 12.5431 42.0985 12.6775 41.8317C12.8094 41.5615 12.8625 41.2859 12.8368 41.0047C12.8086 40.7201 12.7052 40.4531 12.5266 40.2039Z'
              fill='black'
            />
            <path
              d='M4.09486 31.7792L8.65862 32.05L8.80063 32.6767L5.57923 34.4531L9.26004 34.7043L9.4068 35.3235L5.38958 37.4933L5.25454 36.8974L8.67418 35.1407L4.80904 34.9312L4.66704 34.3045L8.06326 32.5014L4.23129 32.3813L4.09486 31.7792Z'
              fill='black'
            />
            <path
              d='M3.65916 28.635L8.04555 28.4317L8.07209 29.0044L3.6857 29.2076L3.65916 28.635Z'
              fill='black'
            />
            <path
              d='M8.42276 22.9966L8.30034 23.5567L4.39211 25.0627L7.80796 25.8093L7.68554 26.3694L3.38957 25.4304L3.51199 24.8703L7.41406 23.363L4.00437 22.6177L4.12679 22.0576L8.42276 22.9966Z'
              fill='black'
            />
            <path
              d='M7.70966 16.1259C7.42787 16.0932 7.16695 16.1379 6.9269 16.2602C6.68329 16.3802 6.48014 16.5702 6.31746 16.8301C6.15477 17.0899 6.06821 17.3628 6.05776 17.6486C6.04599 17.9286 6.11435 18.1993 6.26286 18.4608C6.41004 18.7164 6.62959 18.9356 6.9215 19.1184C7.21342 19.3011 7.50651 19.4028 7.80078 19.4235C8.09727 19.4407 8.37066 19.3839 8.62096 19.2532C8.86992 19.1167 9.07574 18.9185 9.23843 18.6586C9.46574 18.2955 9.54436 17.9285 9.47429 17.5576C9.40421 17.1867 9.19631 16.8657 8.85059 16.5948L7.92128 18.0793L7.52612 17.832L8.77968 15.8295L9.15348 16.0635C9.44181 16.2836 9.66288 16.5558 9.81669 16.88C9.96693 17.202 10.0332 17.5433 10.0156 17.9039C9.99444 18.2622 9.88134 18.6052 9.67631 18.9327C9.46014 19.278 9.18281 19.5429 8.84433 19.7275C8.50228 19.9097 8.13471 19.9943 7.74161 19.9811C7.35074 19.9643 6.97374 19.8423 6.61062 19.615C6.2475 19.3877 5.97302 19.1019 5.78717 18.7576C5.6 18.4076 5.51545 18.04 5.53354 17.6549C5.54806 17.2676 5.66341 16.9013 5.87958 16.5559C6.12695 16.1608 6.44325 15.8732 6.82847 15.6932C7.21593 15.5096 7.63111 15.4598 8.07403 15.5438L7.70966 16.1259Z'
              fill='black'
            />
            <path
              d='M14.6736 12.5374C14.4405 12.7096 14.2011 12.8237 13.9554 12.8799C13.7105 12.9302 13.4821 12.9214 13.2701 12.8535C13.0556 12.7822 12.8755 12.6515 12.7299 12.4614L13.2214 12.0984C13.3606 12.2514 13.5317 12.3417 13.7348 12.3692C13.9388 12.3909 14.1556 12.3169 14.3853 12.1472C14.6049 11.985 14.7373 11.8037 14.7824 11.6032C14.8285 11.3969 14.7879 11.2076 14.6606 11.0353C14.5608 10.9002 14.4425 10.8179 14.3058 10.7883C14.1691 10.7587 14.0288 10.7632 13.8849 10.8016C13.7409 10.84 13.5557 10.9038 13.329 10.9928C13.051 11.1042 12.8186 11.1819 12.6318 11.2259C12.4484 11.2674 12.2586 11.2614 12.0624 11.2079C11.8671 11.1485 11.6884 11.009 11.5262 10.7894C11.3839 10.5968 11.3069 10.3901 11.2951 10.169C11.2832 9.94803 11.3352 9.7321 11.451 9.52126C11.5702 9.30793 11.7446 9.11642 11.9743 8.94673C12.3054 8.70218 12.6368 8.58532 12.9685 8.59614C13.3037 8.60447 13.5858 8.73548 13.8149 8.98916L13.3082 9.36347C13.1915 9.24081 13.0332 9.17497 12.8333 9.16595C12.631 9.15355 12.4268 9.22346 12.2207 9.37568C12.0281 9.51792 11.9085 9.68463 11.8617 9.87581C11.8125 10.0636 11.854 10.247 11.9862 10.4261C12.081 10.5545 12.1939 10.633 12.3247 10.6617C12.4589 10.6879 12.5946 10.6842 12.7318 10.6508C12.8698 10.6115 13.0551 10.5477 13.2876 10.4595C13.5681 10.3516 13.803 10.2772 13.9923 10.2366C14.1791 10.1926 14.3719 10.1991 14.5705 10.256C14.7667 10.3095 14.9471 10.4477 15.1118 10.6707C15.2391 10.843 15.3133 11.0388 15.3343 11.2582C15.3554 11.4776 15.3114 11.7008 15.2022 11.9276C15.093 12.1545 14.9168 12.3577 14.6736 12.5374Z'
              fill='black'
            />
            <path
              d='M15.3556 6.70186L17.4481 10.5623L16.9441 10.8355L14.8516 6.97506L15.3556 6.70186Z'
              fill='black'
            />
            <path
              d='M22.506 8.53518L21.9483 8.66824L18.8939 5.80242L19.7055 9.20343L19.1479 9.3365L18.1272 5.05919L18.6848 4.92612L21.7378 7.78582L20.9277 4.39093L21.4853 4.25787L22.506 8.53518Z'
              fill='black'
            />
            <path
              d='M24.5883 5.61148C24.6147 5.1839 24.7349 4.80629 24.9487 4.47865C25.1628 4.14683 25.4414 3.89473 25.7844 3.72237C26.1317 3.55027 26.5087 3.47678 26.9153 3.50192C27.3932 3.53146 27.8032 3.67252 28.1452 3.9251C28.4873 4.17769 28.727 4.52073 28.8643 4.95422L28.1789 4.91186C28.0737 4.64025 27.9102 4.42606 27.6884 4.26928C27.4709 4.11276 27.2028 4.02465 26.8842 4.00496C26.5782 3.98604 26.2992 4.04034 26.0473 4.16784C25.7953 4.29533 25.592 4.48686 25.4373 4.7424C25.2829 4.99376 25.1949 5.2955 25.1731 5.64762C25.1516 5.99556 25.2018 6.30585 25.3239 6.5785C25.4461 6.84695 25.6244 7.05996 25.8588 7.21752C26.0931 7.37507 26.3633 7.46331 26.6693 7.48222C26.9879 7.50191 27.2646 7.44959 27.4995 7.32524C27.7389 7.19697 27.9275 7.00454 28.0654 6.74796L28.7508 6.79032C28.5614 7.19942 28.2814 7.50823 27.9109 7.71677C27.5406 7.92111 27.1165 8.00851 26.6386 7.97897C26.2319 7.95384 25.8668 7.83659 25.5431 7.62722C25.2238 7.41392 24.9783 7.13153 24.8064 6.78006C24.6346 6.42859 24.5619 6.03906 24.5883 5.61148Z'
              fill='black'
            />
            <path
              d='M31.9566 4.5108L31.5087 5.90871L33.0326 6.39693L32.8885 6.8469L31.3646 6.35868L30.9032 7.79859L32.6071 8.34447L32.463 8.79444L30.2131 8.07365L31.5548 3.88591L33.8046 4.60671L33.6605 5.05668L31.9566 4.5108Z'
              fill='black'
            />
            <path
              d='M36.653 9.85162C37.3371 9.84141 37.8823 9.82152 38.2886 9.79196C38.6975 9.75909 39.0748 9.68826 39.4204 9.57946C39.7719 9.46993 40.0367 9.30085 40.2147 9.07222C40.3825 8.85684 40.4611 8.64656 40.4506 8.44137C40.4459 8.23545 40.3276 8.04216 40.0957 7.8615C39.8703 7.68601 39.6392 7.62046 39.4024 7.66487C39.1714 7.70855 38.9593 7.84415 38.7661 8.07166L38.3287 7.73099C38.631 7.3702 38.9669 7.17133 39.3364 7.13438C39.7059 7.09743 40.058 7.20929 40.3927 7.46995C40.7339 7.73578 40.9304 8.04055 40.9821 8.38427C41.0372 8.73057 40.9356 9.0694 40.6775 9.40075C40.4633 9.67577 40.1714 9.87964 39.8019 10.0124C39.4382 10.1444 39.0746 10.2285 38.711 10.2647C38.35 10.2976 37.9052 10.3185 37.3765 10.3273L39.0863 11.659L38.7921 12.0368L36.4014 10.1747L36.653 9.85162Z'
              fill='black'
            />
            <path
              d='M42.113 11.5234C42.6972 11.0984 43.2215 10.8625 43.6859 10.8155C44.1537 10.766 44.5606 10.9791 44.9065 11.4546C45.2499 11.9267 45.3261 12.3777 45.135 12.8075C44.9473 13.2349 44.5613 13.6611 43.9771 14.086C43.3827 14.5184 42.8516 14.7593 42.3838 14.8087C41.916 14.8582 41.5104 14.6469 41.167 14.1748C40.8211 13.6992 40.7437 13.2466 40.9348 12.8167C41.1259 12.3869 41.5186 11.9558 42.113 11.5234ZM43.6436 13.6275C43.9391 13.4125 44.1739 13.2106 44.348 13.0216C44.528 12.8335 44.6364 12.6326 44.6731 12.4189C44.7123 12.2087 44.6492 11.9897 44.4836 11.7622C44.3156 11.5312 44.1243 11.4003 43.9097 11.3694C43.6976 11.342 43.4731 11.3832 43.2362 11.4932C43.0053 11.6041 42.742 11.767 42.4466 11.9819C42.1409 12.2043 41.898 12.4095 41.718 12.5976C41.5405 12.789 41.4321 12.9899 41.3929 13.2002C41.3562 13.4139 41.4218 13.6362 41.5898 13.8672C41.7554 14.0947 41.9442 14.2222 42.1564 14.2497C42.371 14.2806 42.5955 14.2393 42.8298 14.126C43.0666 14.016 43.3379 13.8498 43.6436 13.6275Z'
              fill='black'
            />
            <path
              d='M47.0842 15.5143L47.5603 15.2981L48.05 16.3766L43.9026 18.2598L43.663 17.7321L47.3342 16.065L47.0842 15.5143Z'
              fill='black'
            />
            <path
              d='M46.2012 20.2034L46.6308 20.1367L49.9956 21.8521L50.1009 22.5307L47.1376 22.9908L47.2343 23.6133L46.7424 23.6897L46.6458 23.0671L45.6435 23.2227L45.5565 22.6624L46.5588 22.5068L46.2012 20.2034ZM49.4264 22.0871L46.7945 20.7807L47.0545 22.4554L49.4264 22.0871Z'
              fill='black'
            />
          </svg>
        </motion.div>
      </div>
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          About the TiC SAP <br />
          
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.3 }}>
          Pioneered by the TiC Foundation and funded by the US embassy Yaounde, The TiC Startup Accelerator Program (SAP) is a 
          Four (04) months intensive training program for early-stage  Cameroonian entrepreneurs in tech.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          As an entrepreneurs you will learn the secrets to startup success, following a well-structured curriculum inspired by the Lean startup methodology and built by expect who've done it.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.4 }}>
            
            Mentorship, hands-on business experiences, curated courses and live working sessions are the major growth pillars of the SAP.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          With a mission to help ambitious local entrepreneurs scale their businesses through the thick &amp; thin and achieve success for themselves and for their community.
        </motion.p>
      </div>
    </section>
  );
}
