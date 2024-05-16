import React, { Fragment } from 'react'
import CardProducts from '../Components/Fragments/CardProducts'
import Button from '../Components/Elements/Button/Index';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: "Rp 100.000",
    image: '/images/shoes-1.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus est commodi, ipsa fugiat mollitia voluptates quidem suscipit minus? Aspernatur, dolore.',
  },
  {
    id: 2,
    name: 'Sepatu snackers',
    price: "Rp 1.000.000",
    image: '/images/shoes-1.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus est commodi',
  },
]

const email = localStorage.getItem('email');
const Products = () => {

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = "/login"
  }
  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button className="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
      </div>
      <div className='flex justify-center py-5'>
      {products.map ((product) =>
        <CardProducts key={product.id}>
        <CardProducts.Header image={product.image}/>
        <CardProducts.Body name={product.name}>
          {product.description}
        </CardProducts.Body>
        <CardProducts.Footer price={product.price}/>
      </CardProducts>
      )}  
    </div>
    </Fragment>
    
  )
}

export default Products
