import React from 'react'
import '../styles/Shop.css'
import Card from './Card'

const Shop = ({handleClick,list,showCartVal}) => {
  return (
    <section>
        {list.map((item)=>{
          console.log(item);
            return <Card item={item} key={item.id} handleClick={handleClick} showCartVal={showCartVal}/>
        })}
    </section>
  )
}

export default Shop
