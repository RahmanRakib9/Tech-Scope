import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData.json'
import ProductDetails from '../ProductDetails/ProductDetails';
import Products from '../Products/Products';

const Home = () => {
     const [products, setProducts] = useState([]);
     const [addCarts, setAddCarts] = useState([])

     useEffect(() => {
          setProducts(fakeData)
     }, [])

     const handleAddCart = (x) => {
          const newCart = [...addCarts, x];
          // console.log(newCart);
          setAddCarts(newCart);
     }



     return (
          <div>

               <h1 className='text-center'>Products available:{products.length}</h1>
               <h2 className='text-center'>Add cart:{addCarts.length}</h2>
               <ProductDetails addCarts={addCarts}></ProductDetails>
               <div className='mt-5 container row ' style={{ position: 'relative', marginLeft: '10%' }}>
                    {
                         products.map(x => <Products x={x} key={x.id} handleAddCart={handleAddCart}></Products>)
                    }
               </div>
          </div>
     );
};

export default Home;