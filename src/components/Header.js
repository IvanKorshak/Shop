import React, { useState } from 'react'
import { SiAmericanairlines } from "react-icons/si";
import Order from './Order';

const showOrders =(props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price)) 
  return (<div>
     {props.orders.map(el => (
              <Order onDelete={props.onDelete} key={el.id} item={el} />
            ))}
            <p className='summa'>Сумма товаров: {summa}$</p>
  </div>)
}

const showNothing = () => {
  return (<div className='empty'>
    <h2>Товар не выбран</h2> </div>)
}

export default function Header(props) {
  let [cartOpen, setCartOpen]= useState(false)
  return (
    <header>
        <div>
            <span className='logo'>H&C </span>
            <ul className='nav'>
                <li>О нас </li>
                <li>Контакты</li>
                <li>Кабинет</li>
            </ul>
            <SiAmericanairlines onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-buttom ${cartOpen && 'active'}`}></SiAmericanairlines>
            </div>
         {cartOpen && (
          <div className='shop-cart'>
           {props.orders.length > 0 ?
           showOrders(props) : showNothing()}
          </div>
         )}
        <div className='presentation'>
          
         
        </div>
    </header>
  )
}
