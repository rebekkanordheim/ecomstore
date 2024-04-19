import React from 'react';
import Products from './components/Product/Products';

function Home() {
    return (
        <div>
            <h1>Welcome to Our Online Shop!</h1>
            <p>Check out our latest products:</p>
            <Products />
        </div>
    );
}

export default Home;
