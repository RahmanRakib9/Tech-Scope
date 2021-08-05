import React from 'react';

const ProductDetails = (props) => {
     const addCarts = props.addCarts;
     console.log(addCarts);
     let totalCost = 0;
     let selectedProducts = ''

     for (let i = 0; i < addCarts.length; i++) {
          const element = addCarts[i];
          totalCost = totalCost + element.price;
          selectedProducts = selectedProducts + ',' + ' ' + element.name;

     }

     return (
          <div>
               <h2 className='text-center'>Selected products:{selectedProducts}</h2>
               <h3 className='text-center'>Total cost:{totalCost}</h3>
          </div>
     );
};

export default ProductDetails;
//