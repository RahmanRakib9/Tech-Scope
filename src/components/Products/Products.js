import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'

const Products = (props) => {
     const { img, price, name } = props.x;
     const handleAddCart = props.handleAddCart;
     // console.log(props);
     return (
          <div className='col-lg-3 col-md-4 mt-5 col-sm-12 mb-5' style={{ borderBottom: '2px solid ' }}>
               <h2 style={{ fontStyle: "italic" }}>{price}<span style={{ fontSize: '40px' }}>৳</span></h2>
               <img src={img} alt="" style={{ width: "100%", height: "60%" }} />
               <h4>Model: {name}</h4>
               <button className="btn btn-warning custom-style " onClick={() => handleAddCart(props.x)}>Add to cart<FontAwesomeIcon icon={faShoppingCart} /></button>


          </div>
     );
};

export default Products;
//#ff855e