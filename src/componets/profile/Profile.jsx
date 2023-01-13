import React from 'react'
import me from '../../assets/pic.jpg'

import {motion} from 'framer-motion'

import {MdDashboard} from 'react-icons/md'
import { Link } from 'react-router-dom'
const profile = () => {

    const options = {
        initial: {
          y: "-100%",
          opacity: 0,
        },
        animate: {
          y: 0,
          opacity: 1,
        },
      };

  return (
<>

<section className='profile mt-5'>

<main>
< motion.img src={me} alt="user" {...options} />

<motion.h5  {...options} transition={{delay:0.3}} >anand</motion.h5>

<motion.div {...options} transition={{ delay: 0.5 }}>
          <Link
            to="/admin/dashboard"
            style={{
              borderRadius: 0,
              backgroundColor: "rgb(40,40,40)",
            }}
          >
            <MdDashboard /> Dashboard
          </Link>
        </motion.div>


        <motion.div
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
        >
          <Link to="/myorders">Orders</Link>
        </motion.div>

        
        <motion.button
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
          }}
        >
          Logout
        </motion.button>



</main>
</section>

</>
  )
}

export default profile