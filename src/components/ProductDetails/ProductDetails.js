import React from 'react';

const ProductDetails = (props) => {
     const addCarts = props.addCarts;
     console.log(addCarts);
     let totalCost = 0;
     let selectedProducts = ''

     for (let i = 0; i < addCarts.length; i++) {
          const element = addCarts[i];
          totalCost = totalCost + element.price;
          selectedProducts = selectedProducts + element.name+' ,'

     }

     return (
          <div>
               <h4 className='text-center' style={{fontFamily:'sans-serif'}}>selected products: <span style={{ fontSize: '18px' }}>{selectedProducts}</span></h4>
               <h2 className='text-center'>Total cost:{totalCost}</h2>
          </div>
     );
};

export default ProductDetails;
//