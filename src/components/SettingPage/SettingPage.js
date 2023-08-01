import './SettingPage.css';
import React, { useState } from 'react';
import SideNavBar from '../SideNavBar/SideNavBar';

const SettingPage = () => {

    const [activeButton, setActiveButton] = useState('app');

    
    const handleButtonClick = (button) => {
        setActiveButton(button);
    };
    
    const isSelected = (button) => {
        return activeButton === button ? 'SettingPageSelectedButton' : 'SettingPageUnSelectedButton';
    };
    
    return (
        <div className='SettingPageBackground'>
            <SideNavBar/>
            <div className='SettingPageContainer'>
                <div className='SettingPageSelection'>
                    <div className={`SettingPageSelectionButton ${isSelected('app')}`} 
                        onClick={() => handleButtonClick('app')}>
                        App Settings
                    </div>
                    <div className={`SettingPageSelectionButton ${isSelected('privacy')}`}
                        onClick={() => handleButtonClick('privacy')}>
                        Privacy
                    </div>
                    <div className={`SettingPageSelectionButton ${isSelected('account')}`}
                        onClick={() => handleButtonClick('account')}>
                        Account
                    </div>
                </div>
                <div className='SettingPageContent'>
                    {activeButton === 'app' && (
                        <>
                            <div>App Settings Content</div>
                            {/* Add more content related to App Settings */}
                        </>
                    )}
                    {activeButton === 'privacy' && (
                        <>
                            <div>Privacy Content</div>
                            {/* Add more content related to Privacy */}
                        </>
                    )}
                    {activeButton === 'account' && (
                        <>
                            
                            <div>Profile Picture</div>
                            <div>User Info</div>
                            <div>Logout</div>
                            <div>Delete Account</div>
                            {/* Add more content related to Account */}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SettingPage;
