import React from 'react'
import CardProducts from '../Components/Fragments/CardProducts'

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


const Products = () => {
  return (
    <div className='flex justify-center py-5'>
      
      {products.map ((product) =>
        <CardProducts>
        <CardProducts.Header image={product.image}/>
        <CardProducts.Body name={product.name}>
          {product.description}
        </CardProducts.Body>
        <CardProducts.Footer price={product.price}/>
      </CardProducts>
      )}  
    </div>
  )
}

export default Products
