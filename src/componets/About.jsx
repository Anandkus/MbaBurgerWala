import React from 'react'
import { Link } from 'react-router-dom'

import {RiFindReplaceLine} from 'react-icons/ri'
import me from '../assets/pic.jpg'

import {motion} from 'framer-motion'

const About = () => {
  const sty={color:'brown'}

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
   <section className='about mt-5'>
    <main>

      <h1 className=''>About Us</h1>


      <article>
          <h4><span style={sty}>M</span>BA <span style={sty}>B</span>urger <span style={sty}>w</span>ala</h4>
          <p>
            We are MBA Burger Wala. The place for most tasty burgers on the
            enitre earth.
          </p>

          <p>
            Explore the various type of food and burgers. Click below to see the
            menu
          </p>

          <Link to="/MbaBurgerWala/">
 <RiFindReplaceLine/>
          </Link>  
        </article>



        <div>
            <h2>Founder</h2>
            <article>
              <div>
              < motion.img src={me} alt="user" {...options} />
                <h3  {...options} transition={{delay:0.3}}>anand technical</h3>
              </div>
              <p>
              I am Anand , the founder of MBA Burger Wala. Affiliated to
              God Taste...
            </p>
            </article>
          </div>



    </main>
   </section>
   
   </>
  )
}

export default About