import React from 'react'
import {motion} from 'framer-motion'
import me from '../../assets/pic.jpg'
const Founder = () => {
    const Option={
        initial:{x:"-100%" ,opacity:0},
         whileInView:{x:0,opacity:1}
    }
  return (
    <>
      <section className='founder'>
        <motion.div {...Option}>
<img src={me} alt="" height={200} width={200}/>
<h3>Anand Technical</h3>
<p>hey Everyone i am anand the founder of mba burger wala. <br /> i am from datia Mp.India </p>

        </motion.div>
        </section>  
    
    </>
  )
}

export default Founder