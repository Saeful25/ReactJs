import React from 'react'
import Button from '../Elements/Button/Index';
const CardProducts = (props) => {
    const {children} = props ;
  return (
   
        <div className='w-full max-w-sm border border-gray-200 rounded-lg shadow '>   
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
    const {children, title} = props ;
    return (
        <div className="px-5 pb-5">
        <a href="">
          <h5 className='text-xl font-semibold tracking-tight '>{title}</h5>
          <p className='text-m'>
            {children}
          </p>
        </a>
      </div>
    )
}

const Footer = (props) => {
    const {price} = props ;
    return (
        <div className="flex items-center justify-between px-5 pb-5">
        <span className='text-xl font-bold '>{price}</span>
        <Button className="bg-blue-600">Add to cart</Button>
      </div>
    )
}

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
