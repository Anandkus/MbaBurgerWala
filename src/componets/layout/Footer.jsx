import React from 'react'
import {Link} from 'react-router-dom'
import{AiFillInstagram,AiFillYoutube,AiFillGithub} from 'react-icons/ai'
const Footer = () => {
  return (
  <>
  <footer>

  <div>
    <h2>mba burger wala</h2>
    <p>we are trying to give your best taste possible.</p>
    <br />
    <em>we give attention to genuine feedback</em>
    <strong> all right recieve @nand Mba Burger Wala</strong>
  </div>
  <aside>
   <h4>follow Us</h4>
   <Link to="#"> <AiFillYoutube/>  </Link>
   
   <Link to="#"><AiFillInstagram/></Link>
   <Link to="https://github.com/Anandkus/" target='anand'><AiFillGithub/></Link>
  </aside>
  </footer>
  
  </>
  )
}

export default Footer