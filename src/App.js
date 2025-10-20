import React from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Slider />
            <Products />
            <Footer />
        </div>
    );
}

export default App;