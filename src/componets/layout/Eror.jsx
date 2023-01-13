import React from 'react'
import {NavLink } from "react-router-dom";

const Eror = () => {
  return (
    <>
     <div className='container-fluid pt-5'>
<div className='container-sm pt-5 mt-5 '>
<div className='row'>
<div className='col-md-4'>
    <img src="https://tse4.mm.bing.net/th?id=OIP.acx1rkIyfzuki1O4rGsaxAHaD7&pid=Api&P=0" alt="" className='img-fluid'/>
</div>
</div>

<div className='row'>
    <div className='col-md-8'>
        
<h2 className='text-center mt-3'>We are Sorry , page Not Found!</h2>
<NavLink to="/" ><button className="btn btn-light">Go back</button></NavLink>
    </div>
</div>
    </div>
</div>
    

   
    </>
  )
}

export default Eror