import React from 'react';
import Products from './Products'; // Import the Products component

function Home() {
    return (
        <div>
            <h1>Welcome to Our Online Shop!</h1>
            <p>Check out our latest products:</p>
            <Products /> {/* Render the Products component here */}
        </div>
    );
}

export default Home;
