import React, { Fragment, useEffect, useState } from 'react'
import CardProducts from '../Components/Fragments/CardProducts'
import Button from '../Components/Elements/Button/Index';
import { getProducts } from '../services/product.services';
import { data } from 'autoprefixer';

const email = localStorage.getItem('email');
const Products = () => {

    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState (0);
    const [products, setProducts] = useState ([]);

    useEffect(() => {
      // parsing data dari local storage
      // JSON.parse untuk mengkonfersi json string menjadi object
      setCart(JSON.parse(localStorage.getItem("cart")) || []);
    },[])

    useEffect(() => {
      if(cart.length > 0) {

      // acc adalah acumulator
      const sum = cart.reduce((acc, item ) =>{
        const product = products.find((product) => product.id == item.id);
        return acc + products.price * item.qty;
      }, 0)
      setTotalPrice(sum);
      // JSON.stringify untuk mengconfersi javascript value menjadi js object notion /json string
      localStorage.setItem("cart", JSON.stringify(cart));
      }
    }, [cart, products]);

    useEffect (() => {
      getProducts((data) => {
        setProducts(data);
      });
    }, [])
  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = "/login"
  }

  const handleAddToCart = (id) => {
    if(cart.find(item => item.id === id)){
      setCart(
        cart.map(item => item.id === id ? {...item, qty : item.qty + 1} : item)
      )
    }else{
      setCart([...cart, {id, qty:1}])
    }
  }
  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button className="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
      </div>
      <div className='flex justify-center py-5'>
        <div className="w-4/6 flex flex-wrap">
      {products.length > 0 &&  products.map ((product) =>
        <CardProducts key={product.id}>
        <CardProducts.Header image={product.image}/>
        <CardProducts.Body name={product.title}>
          {product.description}
        </CardProducts.Body>
        <CardProducts.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart} />
      </CardProducts>
      )}  
      </div>
    <div className="w-2/6">
      <h1 className='text-3xl font-bold text-blue-600 ml-5 mb-2'>Cart</h1>
      <table className='text-left table-auto border-separate border-spacing-x-5'>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 && cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return (
              <tr key={item.id}>
                <td>{product.title.substring(0,10)}...</td>
                <td>{product.price.toLocaleString('us-US', {
                  style: 'currency', 
                  currency: 'USD'
                  })}
                </td>
                <td>{item.qty}</td>
                <td>{product.price.toLocaleString('us-US', {style: 'currency', currency: 'USD'})}</td> 
              </tr>
            )
          })

          }
           <tr>
            <td colSpan={3}><b>Total Price</b></td>
            <td><b>{totalPrice.toLocaleString('us-US', {style: 'currency', currency: 'USD'})}</b></td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    </Fragment>
    
  )
}

export default Products
