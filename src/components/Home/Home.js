import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData.json'
import ProductDetails from '../ProductDetails/ProductDetails';
import Products from '../Products/Products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
     const [products, setProducts] = useState([]);
     const [addCarts, setAddCarts] = useState([])

     useEffect(() => {
          setProducts(fakeData)
     }, [])

     const handleAddCart = (x) => {
          const newCart = [...addCarts, x];
          setAddCarts(newCart);
     }



     return (
          <div>

               <h1 className='text-center'>Products available:{products.length}</h1>
               <h4 className='text-center' style={{ fontFamily: 'sans-serif' }}>Add cart<FontAwesomeIcon icon={faShoppingCart} />:{addCarts.length}</h4>
               <ProductDetails addCarts={addCarts}></ProductDetails>
               <div className='mt-5 container row ' style={{ position: 'relative', marginLeft: '15%' }}>
                    {
                         products.map(x => <Products x={x} key={x.id} handleAddCart={handleAddCart}></Products>)
                    }
               </div>
          </div>
     );
};

export default Home;