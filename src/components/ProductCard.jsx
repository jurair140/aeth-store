import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="mb-4">
      <div className="card" style={{width:"17rem"}}>
        <img src={product.image} className="card-img-top" alt={product.title} height={"250px"} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">${product.price}</p>
          <Link to={`/product/${product.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
