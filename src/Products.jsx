import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function Products() {
    const [products, setProducts] = useState([]);
    const [searchedProduct, setSearchedProduct] = useState(null);
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

    const handleSearch = (searchTerm) => {
        const foundProduct = products.find(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchedProduct(foundProduct);
    };

    if (isLoading) {
        return <div>Loading products...</div>;
    }

    if (isError || !products) {
        return <div>Error loading product</div>;
    }

    return (
        <div className='products-container'>
            <SearchBar onSearch={handleSearch} />
            {searchedProduct ? (
                <div className='product'>
                    <div className='product-info'>
                        <Link to={`/product/${searchedProduct.id}`}>
                            <h2 className='product-title'>{searchedProduct.title}</h2>
                        </Link>
                        <p className='product-price'>Price: ${searchedProduct.price}</p>
                        <Link to={`/product/${searchedProduct.id}`}>
                            <button className='view-product-btn'>View Product</button>
                        </Link>
                    </div>
                    <img className='product-image' src={searchedProduct.image.url} alt={searchedProduct.image.alt} />
                </div>
            ) : (
                products.map((product) => (
                    <div key={product.id} className='product'>
                        <div className='product-info'>
                            <h2 className='product-title'>{product.title}</h2>
                            <p className='product-price'>Price: ${product.price}</p>
                            <img className='product-image' src={product.image.url} alt={product.image.alt} />
                            <Link to={`/product/${product.id}`}>
                                <button className='view-product-btn'>View Product</button>
                            </Link>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default Products;
