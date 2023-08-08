import './CassettePage.css';
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

import SideNavBar from '../SideNavBar/SideNavBar.js';
import CassetteFront from '../CassetteFront/CassetteFront';
import CassetteLog from './CassetteLog/CassetteLog';


const CassettePage = () => {

    const [activeButton, setActiveButton] = useState('logs');
    const [recording, setRecording] = useState(false);
    const [audioChunks, setAudioChunks] = useState([]);
    const mediaRecorderRef = useRef(null);
    const [audioBlob, setAudioBlob] = useState(null);
  

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
  
    const startRecording = () => {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then((stream) => {
          const mediaRecorder = new MediaRecorder(stream);
          mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
              setAudioChunks((prevChunks) => [...prevChunks, event.data]);
            }
          };
          mediaRecorder.onstop = () => {
            const newAudioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            setAudioChunks([]);
            setRecording(false);
            setAudioBlob(newAudioBlob); // Set the audioBlob in the component state
          };
          mediaRecorderRef.current = mediaRecorder;
          setRecording(true);
          mediaRecorder.start();
        })
        .catch((error) => {
          console.error('Error accessing microphone:', error);
        });
    };
  
    const stopRecording = () => {
      if (mediaRecorderRef.current) {
        uploadAudio();
        mediaRecorderRef.current.stop();
      }
    };

    const uploadAudio = () => {
        if (audioBlob) {
          const storageRef = firebase.storage().ref();
          const audioRef = storageRef.child('audio/' + Date.now() + '.wav');
          
          audioRef.put(audioBlob).then((snapshot) => {
            console.log('Audio uploaded!', snapshot);
          }).catch((error) => {
            console.error('Error uploading audio:', error);
          });
        } else {
          console.error('No audio to upload');
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
                            <CassetteLog mainText='Yellowish_01' dateCreated='05/03/2002 3:15am' totalTime='5:32'/>
                            <CassetteLog mainText='Yellowish_02' dateCreated='05/04/2002 11:51am' totalTime='27:01'/>
                            <CassetteLog mainText='Yellowish_03' dateCreated='05/05/2002 7:12pm' totalTime='1:51'/>
                            <CassetteLog mainText='Yellowish_04' dateCreated='05/06/2002 9:15am' totalTime='15:32'/>
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