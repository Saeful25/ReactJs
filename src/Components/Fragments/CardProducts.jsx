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
        <img src={image} alt="products"  className='p-8 rounded-t-lg h-60 w-full object-cover'/>
        </a>
    )
}
const Body = (props) => {
    const {children, name} = props ;
    return (
        <div className="px-5 pb-5 h-full">
        <a href="">
          {/* substring untuk memotong kata */}
          <h5 className='text-xl font-semibold tracking-tight ' >{name.substring(0, 20)}....</h5>
          <p className='text-m'>
            {children.substring(0 , 100)}....
          </p>
        </a>
      </div>
    )
}

const Footer = (props) => {
    const {price, handleAddToCart, id} = props ;
    return (
        <div className="flex items-center justify-between px-5 pb-5">
        <span className='text-l text-red-600 font-semibold '> {price.toLocaleString('us-US', {style: 'currency', currency:'USD'})}</span> 
    <Button className="bg-blue-600" onClick={() => handleAddToCart(id)}>Add Cart</Button>
      </div>
    )
}

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
