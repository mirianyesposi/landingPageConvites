import React from 'react';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import CustomizeInvite from './components/CustomizeInvite/CustomizeInvite';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Services />
            <CustomizeInvite />
            <Gallery />
            <Testimonials />
            <Contact />
        </div>
    );
}

export default App;
