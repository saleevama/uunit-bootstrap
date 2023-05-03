import React from 'react'
import {motion} from 'framer-motion'
import '../App.css'

const Description = () => {
  return (
    <div>
      <div>
    </div>
        
        <motion.div id='div1'

        initial={{
          x:-1000,
          opacity: 0
        }}

        animate={{
          x:0,
          opacity: 1
        }}
        transition={{
          delay:1,
          duration:2
        }}
        >
          В нашей системе онлайн бронирования и подбора туров, вы сможете найти и забронировать выгодные предложения на путевки. </motion.div>

          <motion.div id='div2'
          initial={{
            opacity:0,
          }}
          animate={{
            y:0,
            opacity:1
          }}
          transition={{
            delay:1,
            duration:2
          }}>
            <motion.img
            src='img/first.jpg'
            className='banner'
            width={850}

            initial={{
              opacity:0.6
            }}

            transition={{
              duration:5
            }}

            whileTap={{rotate:360}}/>

          </motion.div>
          



            <motion.button className='btn btn-primary'
            whileHover={{
              scale:1.2
            }}>
            Забронировать</motion.button>
            </div>


  )
}

export default Description