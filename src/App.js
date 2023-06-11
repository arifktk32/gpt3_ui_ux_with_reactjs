import React from 'react';
import CTA from './components/cta/CTA';
import Article from './components/article/Article';
import Brand from './components/brand/Brand';
import Feature from './components/feature/Feature';
import Navbar from './components/navbar/Navbar';

export const App = () => {
  return (
    <div>
        <Article />
        <Brand />
        <CTA />
        <Feature />
        <Navbar />
    </div>
  )
}

export default App;
