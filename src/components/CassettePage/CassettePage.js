import './CassettePage.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import SideNavBar from '../SideNavBar/SideNavBar.js';
import CassetteFront from '../CassetteFront/CassetteFront';
import CassetteLog from './CassetteLog/CassetteLog';


const CassettePage = () => {

  const [activeButton, setActiveButton] = useState('logs');
  const [recording, setRecording] = useState(false);
  
  const navigate = useNavigate();
  const handleGoBack = () => {
      navigate(-1);
  };

  const [cassetteLogs, setCassetteLogs] = useState([]);

  useEffect(() => {
    console.log("running");
    
    const storedCassetteLogs = JSON.parse(localStorage.getItem('cassetteLogs')) || [];
    setCassetteLogs(storedCassetteLogs);
    const user = firebase.auth().currentUser;
    try{
      console.log(user);

      const unsubscribe = firebase.firestore().collection('audio')
      .where('userId', '==', 'yE32S68jyTcQhtooJowBcbQtL6f1') // Replace with actual user ID
      .onSnapshot(snapshot => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      console.log(data); // Log the fetched data
      setCassetteLogs(data);

      // Store data in local storage
      localStorage.setItem('cassetteLogs', JSON.stringify(data));
      return () => {
        unsubscribe();
      };
    });
    }
    catch(error){
      console.error("Error getting user data:", error);
      throw error;
    }

  }, []);
  

  const startRecording = () => {
    if(!recording){
      setRecording(!recording);
      alert("start recording");
    }
  };

  const stopRecording = () => {
    if (recording) {
      uploadAudio();
      setRecording(!recording)
      cassetteLogs.map(cassetteData => (
        <CassetteLog mainText='Yellowish' key={cassetteData.id} audioData={cassetteData} />
      ))
      alert("stop recording");
    }
  };

  const uploadAudio = async (audioBlob) => {
    if (true) {
      try {
        // Create a Firestore document with user ID and audio URL
        const user = firebase.auth().currentUser; // Assuming user is authenticated
        console.log(user);
        if (true) {
          const audioDocRef = firebase.firestore().collection('audio').doc();
          await audioDocRef.set({
            userId: user.uid,
            audioUrl: "Audio.mp4",
            DateCreated: firebase.firestore.FieldValue.serverTimestamp()
          });
          console.log('Audio metadata stored in Firestore');
        }
      } catch (error) {
        console.error('Error uploading audio or storing metadata:', error);
      }
    }
  };

    
    return (
        <div className='Background'>
            <SideNavBar/>
            <div className='CassetteHomeContainer'>
                <div className='TopBox'>
                    <div className='EjectButton' onClick={handleGoBack}>
                        <div className='EjectIcon'></div>
                    </div>
                </div>
                <div className='MidBox'>
                    <div className='FrontCassetteContainer'>
                        <CassetteFront mainText='Yellowish' subText='7/13/2023' backgroundColor='var(--cassette-background)' highlightColor='#98990a'/>
                    </div>
                    <div className='CassetteLogSelection'>
                        <div className={`CassetteLogButton ${activeButton === 'logs' ? 'CassetteLogSelectedButton' : 'CassetteLogUnSelectedButton'}`}onClick={() => setActiveButton('logs')}>Logs</div>
                        <div className={`CassetteLogButton ${activeButton === 'info' ? 'CassetteLogSelectedButton' : 'CassetteLogUnSelectedButton'}`}onClick={() => setActiveButton('info')}>Info</div>
                    </div>
                    <div className='CassetteLogContainer'>
                        {/* Conditionally render the content based on the activeButton */}
                        {activeButton === 'logs' ? (
                        <>
                          {cassetteLogs.map(cassetteData => (
                            <CassetteLog mainText='Yellowish' key={cassetteData.id} audioData={cassetteData} />
                          ))}
                        </>
                        ) : (
                        <>
                            <div className='CassettePageInfoName'>Yellowish</div>
                            <div className='CassettePageInfoDescription'>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae purus faucibus ornare suspendisse. Id faucibus nisl tincidunt eget nullam non. Eget est lorem ipsum dolor. Tellus at urna condimentum mattis pellentesque id nibh. Ultricies mi eget mauris pharetra et. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Purus gravida quis blandit turpis cursus.</div>
                            <div className='CassettePageInfoColorBox'>
                                Color:
                                <div className='CassettePageInfoColor'></div>
                            </div>
                            <div className='CassettePageInfoDateCreated'>Date Created: 7/13/2023 7:05pm</div>
                            <div className='CassettePageInfoErase'>Erase</div>
                        </>
                        )}
                    </div>
                </div>
                <div className='BottomBox'>
                    <button className='CassettePageButton'>
                        <div className='CassettePageButtonTitle'>Delete</div>
                        <div className='CassettePageButtonIndent'></div>
                    </button>
                    <button className='CassettePageButton'>
                        <div className='CassettePageButtonTitle'>Back</div>
                        <div className='CassettePageButtonIndent'></div>
                    </button>
                    <button className='CassettePageButton'>
                        <div className='CassettePageButtonTitle'>Transcribe</div>
                        <div className='CassettePageButtonIndent'></div>
                    </button>
                    <button onClick={startRecording} disabled={recording} className='CassettePageButton CassettePageRecordButton'>
                        <div className='CassettePageButtonTitle'>Record</div>
                        <div className='CassettePageButtonIndent'></div>
                    </button>
                    <button onClick={stopRecording} disabled={!recording} className='CassettePageButton'>
                        <div className='CassettePageButtonTitle'>Stop</div>
                        <div className='CassettePageButtonIndent'></div>
                    </button>
                    <button className='CassettePageButton'>
                        <div className='CassettePageButtonTitle'>Foward</div>
                        <div className='CassettePageButtonIndent'></div>
                    </button>
                    <button className='CassettePageButton'>
                        <div className='CassettePageButtonTitle'>Export</div>
                        <div className='CassettePageButtonIndent'></div>
                    </button>
                </div>
            </div>
        </div>
        );
    }

export default CassettePage;