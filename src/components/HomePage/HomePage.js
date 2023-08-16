import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import './HomePage.css';
import SideNavBar from '../SideNavBar/SideNavBar.js';
import CassetteSide from '../CassetteSide/CassetteSide.js';
import CassetteFront from '../CassetteFront/CassetteFront.js';

const HomePage = () => {

    const [SideView, setSideView] = useState(true);
    const [Cassettes, setCassettes] = useState([]);

    const clickSideView = () => {
        setSideView((prevValue) => !prevValue);
    };

    useEffect(() => {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
        if (user) {
          console.log("UseEffect");
          
          const storedCassettes = JSON.parse(localStorage.getItem('Cassettes')) || [];
          setCassettes(storedCassettes);
    
          console.log("Getting the user");
          console.log(user);
    
          try {
            const unsubscribe = firebase.firestore().collection('users').doc(user.uid).collection('Cassettes')
             // .where('userId', '==', 'userId') // Replace with actual user ID
              .onSnapshot(snapshot => {
                const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                console.log(data); // Log the fetched data
                setCassettes(data);
    
                // Store data in local storage
                localStorage.setItem('Cassettes', JSON.stringify(data));
              });
            
            return () => {
              unsubscribe();
            };
          } catch (error) {
            console.error("Error getting user data:", error);
            throw error;
          }
        }
      });
    
      return () => {
        unsubscribe();
      };
    }, []);  

    return (
        <div className='Background'>
            <SideNavBar/>
            {/*
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
            */}

            <div className='HomePageShelf'>
                <>
                    {Cassettes.map(cassettesData => (
                        <div className='ShelfCassetteSideContainer'>
                            <CassetteSide key={cassettesData.id} audioData={cassettesData} mainText="Test Cassette" backgroundColor=' var(--cassette-background)' highlightColor='#880804'/>
                        </div>
                    ))}
                </>

            </div>
          
        {/*
            <div className='HomePageShelf'>
                <div className='ShelfCassetteFrontContainer'>
                    <CassetteFront mainText='Ahhhhh' subText='7/13/2023' backgroundColor=' var(--cassette-background)' highlightColor='#08999a'/>
                </div>
            </div>
          */}
        </div>
        
        );
    }

export default HomePage;