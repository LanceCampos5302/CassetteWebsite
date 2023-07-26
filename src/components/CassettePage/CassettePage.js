import './CassettePage.css';
import React, { useState } from 'react';
import SideNavBar from '../SideNavBar/SideNavBar.js';
import CassetteFront from '../CassetteFront/CassetteFront';
import CassetteLog from './CassetteLog/CassetteLog';

const CassettePage = () => {

    const [activeButton, setActiveButton] = useState('logs');

    return (
        <div className='Background'>
            <SideNavBar/>
            <div className='CassetteHomeContainer'>
                <div className='TopBox'>
                    <div className='EjectButton'>
                        <div className='EjectTriangle'></div>
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
                            <CassetteLog mainText='Yellowish_05' dateCreated='05/07/2002 2:21pm' totalTime='7:01'/>
                            <CassetteLog mainText='Yellowish_06' dateCreated='05/08/2002 6:22pm' totalTime='1:51'/>
                            <CassetteLog mainText='Yellowish_03' dateCreated='05/05/2002 7:12pm' totalTime='1:51'/>
                            <CassetteLog mainText='Yellowish_04' dateCreated='05/06/2002 9:15am' totalTime='15:32'/>
                            <CassetteLog mainText='Yellowish_05' dateCreated='05/07/2002 2:21pm' totalTime='7:01'/>
                            <CassetteLog mainText='Yellowish_06' dateCreated='05/08/2002 6:22pm' totalTime='1:51'/>
                            <CassetteLog mainText='Yellowish_03' dateCreated='05/05/2002 7:12pm' totalTime='1:51'/>
                            <CassetteLog mainText='Yellowish_04' dateCreated='05/06/2002 9:15am' totalTime='15:32'/>
                            <CassetteLog mainText='Yellowish_05' dateCreated='05/07/2002 2:21pm' totalTime='7:01'/>
                            <CassetteLog mainText='Yellowish_06' dateCreated='05/08/2002 6:22pm' totalTime='1:51'/>
                        </>
                        ) : (
                        <>
                            <div className='CassettePageInfoName'>Yellowish</div>
                            <div className='CassettePageInfoDescription'>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae purus faucibus ornare suspendisse. Id faucibus nisl tincidunt eget nullam non. Eget est lorem ipsum dolor. Tellus at urna condimentum mattis pellentesque id nibh. Ultricies mi eget mauris pharetra et. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Purus gravida quis blandit turpis cursus. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Gravida neque convallis a cras semper auctor. Bibendum est ultricies integer quis auctor. Ut tortor pretium viverra suspendisse potenti nullam. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Curabitur vitae nunc sed velit dignissim sodales. Velit egestas dui id ornare arcu odio. Lobortis scelerisque fermentum dui faucibus in ornare quam.</div>
                            <div className='CassettePageInfoColorBox'>
                                Color:
                                <div className='CassettePageInfoColor'></div>
                            </div>
                            <div className='CassettePageInfoDateCreated'>Date Created: 7/13/2023 7:05pm</div>
                            <div className='CassettePageInfoErase'>Erase</div>
                        </> // Closing div tag fixed
                        )}
                    </div>
                </div>
                <div className='BottomBox'>Bottom Box</div>
            </div>
        </div>
        );
    }

export default CassettePage;