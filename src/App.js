import React from 'react';

import { Header, Footer, ZachLualhati, WhoAmI, Experiences, Resume } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

const app = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <ZachLualhati />
            </div>
            <WhoAmI />
            <Experiences />
            <Resume />
            <CTA />
            <Footer />
        </div>
    )
}

export default app