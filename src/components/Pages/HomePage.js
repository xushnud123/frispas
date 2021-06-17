import React from 'react'
import All from '../Navbar/All';
import Find from '../Navbar/Find';
import Footer from '../Navbar/Footer';
import Header from '../Navbar/Header';
import News from '../Navbar/News';
import Readey from '../Navbar/Readey';
import Revolutionary from '../Navbar/Revolutionary';
import Spaces from '../Navbar/Spaces';
import SwiperCarousel from '../Navbar/SwiperCarousel';
import UsesBrend from '../Navbar/UsesBrend';
import Workspace from '../Navbar/Workspace';

function HomePage() {
    return (
        <div>
            <Header/>
            <Revolutionary/>
            <Spaces/>
            <Workspace/>
            <All/>
            <UsesBrend/>
            <SwiperCarousel/>
            <Find/>
            <News/>
            <Readey/>
            <Footer/>
        </div>
    )
}

export default HomePage
