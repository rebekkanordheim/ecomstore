import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Define handleAddToCart function here
  const handleAddToCart = () => {
    addToCart(product); // Call the addToCart function with the product as argument
    console.log('Product added to cart:', product); // Log to console that product has been added to cart
  };

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setProduct(data.data);
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
    <div key={product.id} className="product-detail">
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p>{product.description}</p>
        <h3>Price: ${product.price}</h3>
        <p className='discountedPrice'>Discounted Price: ${product.discountedPrice}</p>
        <img className="product-image" src={product.image.url} alt={product.image.alt} />
        <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
        <div className='reviews'>
          <p>Rating: {product.rating}</p>
          <i>Tags: {product.tags.join(', ')}</i>
          <ul>
            Reviews:
            {product.reviews.map((review) => (
              <li key={review.id}>
                <p>Username: {review.username}</p>
                <p>Rating: {review.rating}</p>
                <b>Description: {review.description}</b>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
