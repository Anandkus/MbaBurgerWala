import React from 'react'
import MenuCard from './MenuCard'
import burger1 from '../../assets/burger1.png'
import burger2 from '../../assets/burger2.png'
import burger3 from '../../assets/burger3.png'
const Menu = () => {
  const Addtocard=(ItemNum)=>[
    alert("i am click")
  ]
  return (
    <>
    
    <section id='menu'>
<h1>Menu</h1>
<div>
  <MenuCard  ItemNum={1}burgerImg={burger1}Price={200}title={"Chese Burger"} Handler={Addtocard}  delay={0.1}/>
  <MenuCard  ItemNum={2}burgerImg={burger2}Price={250}title={"Veg Chese Burger"} Handler={Addtocard} delay={0.5}/>
  <MenuCard  ItemNum={3}burgerImg={burger3}Price={500}title={"Chese Burger with French"} Handler={Addtocard} delay={0.8}/>
  
</div>

    </section>
    </>
  )
}

export default Menu