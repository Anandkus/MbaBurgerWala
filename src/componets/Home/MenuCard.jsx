import React from 'react'
import { motion} from 'framer-motion'
const MenuCard = ({ItemNum,burgerImg,Price,title,Handler,delay=0}) => {
  return (
    <>
    <motion.div className='menucard'
    initial={{x:"-100%",opacity:0}} whileInView={{x:"0",opacity:1}}  transition={{delay}}
    >
<div>Item {ItemNum}</div>
<main>
    <img src={burgerImg} alt="" />
    <h5>₹ {Price}</h5>
    <p>{title}</p>
    <button onClick={()=>Handler(ItemNum)}>Buy now</button>
</main>
    </motion.div>
    
    </>
  )
}

export default MenuCard