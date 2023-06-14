import React from 'react';
import { Brand, CTA, Feature, Navbar } from './components';
import { Blog, Footer, Header, Possibility, WhatGPT3 } from './containers';

import './App.scss';

export const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Feature />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App;
