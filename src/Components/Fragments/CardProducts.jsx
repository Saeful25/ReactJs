import React from 'react'
import Button from '../Elements/Button/Index';
const CardProducts = (props) => {
    const {children} = props ;
  return (
   
        <div className='w-full max-w-xs border border-gray-200 rounded-lg shadow flex flex-col mx-2 my-2'>   
           {children}
        </div>
  )
}

const Header = (props) => {
    const {image} = props ;
    return (
        <a href="#">
        <img src={image} alt="products"  className='p-8 rounded-t-lg'/>
        </a>
    )
}
const Body = (props) => {
    const {children, name} = props ;
    return (
        <div className="px-5 pb-5 h-full">
        <a href="">
          <h5 className='text-xl font-semibold tracking-tight ' >{name}</h5>
          <p className='text-m'>
            {children}
          </p>
        </a>
      </div>
    )
}

const Footer = (props) => {
    const {price, handleAddToCart, id} = props ;
    return (
        <div className="flex items-center justify-between px-5 pb-5">
        <span className='text-l text-red-600 font-semibold '> {price.toLocaleString('id-ID', {style: 'currency', currency:'IDR'})}</span> 
    <Button className="bg-blue-600" onClick={() => handleAddToCart(id)}>Add Cart</Button>
      </div>
    )
}

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
