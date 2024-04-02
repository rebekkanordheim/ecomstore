/* import React, { useEffect, useState } from 'react';

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

  if (isError) {
    return <div>Error loading products</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Discounted Price: ${product.discountedPrice}</p>
          <img src={product.image.url} alt={product.image.alt} />
          <p>Rating: {product.rating}</p>
          <p>Tags: {product.tags.join(', ')}</p>
          <ul>
            Reviews:
            {product.reviews.map((review) => (
              <li key={review.id}>
                <p>Username: {review.username}</p>
                <p>Rating: {review.rating}</p>
                <p>Description: {review.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Products; */




/* import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    let { id } = useParams();

    useEffect(() => {
        async function getData() {
            try {
                setIsLoading(true);
                setIsError(false);

                const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const data = await response.json();

                setProduct(data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        getData();
    }, [id]);

    if (isLoading || !product) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading product</div>;
    }

    return (
        <div>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <img src={product.image.url} alt={product.image.alt} />
        </div>
    );
}

export default ProductDetail;
 */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Product() {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            try {
                const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch product: ${response.status} - ${response.statusText}`);
                }
                const data = await response.json();
                setProduct(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsError(true);
                setIsLoading(false);
            }
        }

        fetchData();
    }, [id]);

    if (isLoading) {
        return <div>Loading product...</div>;
    }

    if (isError || !product) {
        return <div>Error loading product</div>;
    }

    return (
        <div className="product-container">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">Price: ${product.price}</p>
            <img className="product-image" src={product.image.url} alt={product.image.alt} />
        </div>
    );
}

export default Product;
