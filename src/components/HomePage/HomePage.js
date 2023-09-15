import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import './HomePage.css';
import SideNavBar from '../SideNavBar/SideNavBar.js';
import CassetteSide from '../CassetteSide/CassetteSide.js';

const HomePage = () => {

    const [Cassettes, setCassettes] = useState([]);

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

            <div className='HomePageContentContainer'>

              <div className='HomePageShelf'>
                  <>
                      {Cassettes.map(cassettesData => (
                          <div className='ShelfCassetteSideContainer'>
                              <CassetteSide key={cassettesData.id} audioData={cassettesData} mainText="Test Cassette" backgroundColor=' var(--cassette-background)' highlightColor='#880804'/>
                          </div>
                      ))}
                  </>

              </div>
            
              <div className='BottomBox'>
                      <button className='HomePageButton'>
                          <div className='HomePageButtonTitle'>Select</div>
                          <div className='HomePageButtonIndent'></div>
                      </button>
                      <button className='HomePageButton'>
                          <div className='HomePageButtonTitle'>Transcribe</div>
                          <div className='HomePageButtonIndent'></div>
                      </button>
                      <button className='HomePageButton HomePageRecordButton'>
                          <div className='HomePageButtonTitle'>Create</div>
                          <div className='HomePageButtonIndent'></div>
                      </button>
                      <button className='HomePageButton'>
                          <div className='HomePageButtonTitle'>Delete</div>
                          <div className='HomePageButtonIndent'></div>
                      </button>
                      <button className='HomePageButton'>
                          <div className='HomePageButtonTitle'>Export</div>
                          <div className='HomePageButtonIndent'></div>
                      </button>
                  </div>
              </div>
        </div>
        
        );
    }

export default HomePage;