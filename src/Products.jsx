import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Products() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            try {
                const response = await fetch('https://v2.api.noroff.dev/online-shop');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setProducts(data.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsError(true);
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading products...</div>;
    }

    if (isError || !products) {
        return <div>Error loading product</div>;
    }

    return (
        <div className="products-container">
          {products.map((product) => (
            <div key={product.id} className="product">
              <div className="product-info">
                <Link to={`/product/${product.id}`}>
                  <h2 className="product-title">{product.title}</h2>
                </Link>
                <p className="product-price">Price: ${product.price}</p>
              </div>
              <img className="product-image" src={product.image.url} alt={product.image.alt} />
            </div>
          ))}
        </div>
      );
}

export default Products;
