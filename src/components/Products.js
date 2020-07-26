import React, { useState, useEffect } from 'react';
import { csv } from 'd3-fetch';
import { ProductList } from './ProductList';
import Pagination from "react-js-pagination";
import 'styles/products.scss';

const perPageProducts = 15;

export function Products() {

	const [allProducts, setAllProducts] = useState([]);
	const [totalProducts, setTotalProdcuts] = useState(0);
	const [loading, setLoading] = useState(true);
	const [paginationState, setPagination] = useState({
		activePage: 1,
		offset: 0,
		products: [],
	})

  useEffect(() => {
  	const { offset } = paginationState;
    csv('/tanishq_products.csv')
      .then((data) => {
        setAllProducts(data);
        setPagination({
        	...paginationState, 
        	products: data.slice(offset, perPageProducts),
        });
        setTotalProdcuts(data.length);
        setLoading(false);
      })
      .catch((error) => {
      	alert('Something went Wrong');
      	setLoading(false);
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePageChange = (pageNumber) => {
    const newOffset = (pageNumber - 1) * perPageProducts;
    setPagination({
    	...paginationState,
    	offset: newOffset,
    	activePage: pageNumber,
    	products: allProducts.slice(newOffset, newOffset + perPageProducts),
    });

    // move scroll to top after page changes
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const { 
  	activePage,
  	products,
  } = paginationState;

  return (
  	<div className="products m-4">
			{loading && <div className="loader" />}
			<div className="card-group">
			  <ProductList
			    productList={products}
			  />
			</div>
			{products.length ?
	      <div>
	        <Pagination
	          activePage={activePage}
	          itemsCountPerPage={perPageProducts}
	          totalItemsCount={totalProducts}
	          pageRangeDisplayed={5}
	          onChange={handlePageChange}
	          prevPageText="Prev"
	          nextPageText="Next"
	          innerClass="pagination justify-content-end pr-5"
	          itemClass="page-item"
	          linkClass="page-link"
	        />
	      </div> : ''
			}
		</div>
  );
};
