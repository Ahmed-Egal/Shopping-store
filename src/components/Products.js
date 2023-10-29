import React from 'react'
import {useState,useEffect} from 'react'
import './products.css'

const Products = () => {

  const[products,setProducts] = useState([])
  const [cartCount,setCartCount] = useState(0);

  useEffect(() => {
    async function fetchApi(){
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
    
        console.log(data);
        setProducts(data);
      } catch(error) {
        console.log(error);
      }
     }
    
     fetchApi();

  },[])

  

  const AddToCart = () => {
    setCartCount(cartCount + 1)

  }




  return (
    <div className='products-page'>
      <h1>Welcome to the products section</h1>
      <p>Browse through our carefully selected range of clothing, meticulously designed to make you look and feel your best. Our commitment is to provide not just clothes, but an experience that resonates with your individuality.</p>

      <div className='cart-card'>
         <p>
         You have {cartCount} items in your cart 
        </p> 
      </div>

      <div className='products'>
        {products.map(data => (
          <div key={data.id}  className='products-card'>
            <p>{data.title}</p>
            <img src={data.image} className='product-img'/>
            <p> {data.price} $ </p>
            <div>
            <button onClick={AddToCart}>
              Add Item
            </button>
            </div>
            
          </div>
          
        ))}

        
        

      </div>

      

    </div>

    
    
  )
}

export default Products
