import React from 'react'
import CardProducts from '../Components/Fragments/CardProducts'
const Products = () => {
  return (
    <div className='flex justify-center py-5'>
      <CardProducts>
        <CardProducts.Header image="/images/shoes-1.jpg"/>
        <CardProducts.Body title="Sepatu Snackers">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus est commodi, ipsa fugiat mollitia voluptates quidem suscipit minus? Aspernatur, dolore.
        </CardProducts.Body>
        <CardProducts.Footer price=" Rp 1.000.000"/>
      </CardProducts>
    </div>
  )
}

export default Products
