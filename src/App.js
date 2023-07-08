import React from 'react';
import { Brand, CTA, Navbar } from './components';
import { Blog, Footer, Header, Possibility, TheFuture, WhatGPT3 } from './containers';

import './App.scss';

export const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg" id='home'>
            <Navbar />
            <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <TheFuture />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App;
