import React, { useState } from 'react';
import './HomePage.css';
import SideNavBar from '../SideNavBar/SideNavBar.js';
import CassetteSide from '../CassetteSide/CassetteSide.js';
import CassetteFront from '../CassetteFront/CassetteFront.js';
import CollectionView from '../CollectionView/CollectionView';

const HomePage = () => {

    const [SideView, setSideView] = useState(true);

    const clickSideView = () => {
        setSideView((prevValue) => !prevValue);
    };

    return (
        <div className='Background'>
            <SideNavBar/>
            <div className='HomePageShelf HomePageShelf--first'>

                <div className={SideView ? 'ShelfCassetteSideContainer':'ShelfCassetteFrontContainer'} onClick={clickSideView}>
                    {SideView ? <CassetteSide mainText="Fish Logs" backgroundColor=' var(--cassette-background)' highlightColor='#00149a'/> 
                    : <CassetteFront mainText="Fish Logs" subText='7/13/2023' backgroundColor=' var(--cassette-background)' highlightColor='#00149a'/>} 
                </div>

                <div className='ShelfCassetteSideContainer'>
                    <CassetteSide mainText="Affirmate" backgroundColor=' var(--cassette-background)' highlightColor='#088010'/>
                </div>

                <div className='ShelfCassetteFrontContainer'>
                    <CassetteFront mainText='Yellowish' subText='7/13/2023' backgroundColor=' var(--cassette-background)' highlightColor='#98990a'/>
                </div>

                <div className='ShelfCassetteSideContainer'>
                    <CassetteSide mainText="Days" backgroundColor=' var(--cassette-background)' highlightColor='#909011'/>
                </div>
            </div>


            <div className='HomePageShelf'>
                <div className='ShelfCassetteSideContainer'>
                    <CassetteSide mainText="Trials of the common man and his day" backgroundColor=' var(--cassette-background)' highlightColor='#880804'/>
                </div>

                <div className='ShelfCassetteSideContainer'>
                    <CassetteSide mainText="Yestes" backgroundColor=' var(--cassette-background)' highlightColor='#08888a'/>
                </div>
            </div>


            <div className='HomePageShelf'>
                <div className='ShelfCassetteFrontContainer'>
                    <CassetteFront mainText='Ahhhhh' subText='7/13/2023' backgroundColor=' var(--cassette-background)' highlightColor='#08999a'/>
                </div>
            </div>


            <div className='HomePageShelf'>
                <div className='ShelfCassetteCollectionContainer'>
                    <CollectionView mainText='Brazillian JiuJitsu Logs' backgroundColor='#666464' highlightColor = '#6a0aa6'/>      
                </div>
            </div>
        </div>
        );
    }

export default HomePage;