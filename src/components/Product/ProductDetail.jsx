import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowSuccessMessage(true);
    console.log('Product added to cart:', product);
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
    <div>
      {showSuccessMessage && <p className="success-message">Product added to cart!</p>}
      <div key={product.id} className='product-detail'>
        <div className='product-info'>
          <h2 className='product-title'>{product.title}</h2>
          <p>{product.description}</p>
          <h3>Price: ${product.discountedPrice ? product.discountedPrice : product.price}</h3>
          <img className='product-image' src={product.image.url} alt={product.image.alt} />
          <button className='add-to-cart-btn' onClick={handleAddToCart}>Add to Cart</button>
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
    </div>
  );
}

export default ProductDetail;
