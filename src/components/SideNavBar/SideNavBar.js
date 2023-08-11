import React, { useState } from 'react';
import CassetteSide from '../CassetteSide/CassetteSide.js'
import './SideNavBar.css';

const SideNavBar = () => {
    const [collapsed, setCollapsed] = useState(true);
    
    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    };

        return (    
            <div className='SideNavBarWall'>
            <div className={`SideNavBarSetPosition ${collapsed ? 'CollapsedBackground' : 'SideNavBarBackground'}`}>
                <button className={collapsed ? 'ExpandButton' : 'CollapseButton'} onClick={toggleNavbar}></button>
                <nav className={collapsed ? 'Collapsed' : 'SideNavBar'} >

                    <div className='CassetteContainer NavBarCassetteGroup1'>
                        <a className='no-style-link' href='/Home'>
                            <CassetteSide mainText="Home" backgroundColor=' var(--cassette-background)' highlightColor='#fcba03'/>
                        </a>
                        
                    </div>
                    <div className='CassetteContainer NavBarCassetteGroup1'>
                        <a className='no-style-link' href='/CassettePage'>
                            <CassetteSide mainText="Record" backgroundColor=' var(--cassette-background)' highlightColor='#9c1602'/>
                        </a>
                    </div>
                    <div className='CassetteContainer NavBarCassetteGroup1'>
                        <CassetteSide mainText="Export" backgroundColor=' var(--cassette-background)' highlightColor='#61029c'/>
                    </div>
                    <div className='CassetteContainer NavBarCassetteGroup1'>
                        <a className='no-style-link' href='/Settings'>
                            <CassetteSide mainText="Settings" backgroundColor=' var(--cassette-background)' highlightColor='#286313'/>
                        </a>
                    </div>
                    <div className='CassetteContainer'>
                        <CassetteSide mainText="Account" backgroundColor=' var(--cassette-background)' highlightColor='#060d70'/>
                    </div>
                    <div className='CassetteContainer'>
                        <a className='no-style-link' href="/Login" >
                            <CassetteSide mainText="Logout"  backgroundColor=' var(--cassette-background)' highlightColor='#08080a'/>
                        </a>
                    </div>
                </nav>
                </div>
            </div>
        );
}

export default SideNavBar;