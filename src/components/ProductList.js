import React from 'react';

export function ProductList({
  productList
}) {

  if (productList && productList.length) {
    const list = productList.map(product => {
      return (
			  <div className="col-4" id="product-list" key={product._id}>
				  <div className="card mb-3">
				    <img 
				      className="card-img-top" 
				      src={product.image}
				      alt={product.name}
				      height="150"
				    />
				    <div className="card-body">
				      <h6 className="card-title">{product.name}</h6>
				      <p className="card-text">
				        {product.full_description.substring(0, 120) || '-'}
				      </p>
				    </div>
				  </div>
			  </div>
      )
    })

    return list;
  }

  return (
    <div className="col-12 d-flex justify-content-center" id="no-products">
      <h4>No products found</h4>
    </div>
  )
};