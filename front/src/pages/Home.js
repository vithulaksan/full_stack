import React from 'react';
import Navigation from '../component/Navigation';

const Home = () => {
    return (
        <div className='home'>
            <div className='cadre'>
                <p className='text'>Perdre du poid efficacement et durablement</p>
            </div>
            <img src="/Picture/Capture.png" alt='Image annonce'/>
            <Navigation/>
        </div>
    );
};

export default Home;