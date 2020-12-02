import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './globalstyles';
import Hero from './comp-onents/Hero'
import Products from './comp-onents/Products';
import { productFavor, productArt } from './comp-onents/Products/data'
import { Feature } from './comp-onents/Feature';
import { Footer } from './comp-onents/Footer';

function App() {
  return ( 
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose from the favorites'  data={productFavor}/>
      <Feature />
      <Products heading='Chocolate Art'  data={productArt}/>
      <Footer />
    </Router>
  );
}

export default App;