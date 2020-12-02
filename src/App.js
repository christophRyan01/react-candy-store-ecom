import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './globalstyles';
import Hero from './comp-onents/Hero'
import Products from './comp-onents/Products';
import { productData } from './comp-onents/Products/data'
import { Feature } from './comp-onents/Feature';

function App() {
  return ( 
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose from the favorites'  data={productData}/>
      <Feature />
    </Router>
  );
}

export default App;