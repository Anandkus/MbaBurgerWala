import React from 'react'
import { motion} from 'framer-motion'
import Founder from './Founder'
import Menu from './Menu'
const Home = () => {
  return (
    <>
    <section className='home mt-2'>
      <div>
        <motion.h1  initial={{x:"-100%" ,opacity:0}} whileInView={{x:0,opacity:1}} >MBA Burger Wala</motion.h1>
        <motion.p initial={{x:"-100%" ,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.2}}>Give yourself a tasty Burger </motion.p>
      </div>
     
     

      <motion.a href='#menu' initial={{y:"-100%",opacity:0}}  whileInView={{y:0,opacity:1}} transition={{delay:0.4}}>Explore</motion.a>

     
    </section>
    <Founder/>
    <Menu/>
    </>
  )
}

export default Home