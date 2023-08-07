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
                <div className='SettingPageSelectionBuffer'></div>
                <div className='SettingPageContent'>
                    {activeButton === 'app' && (
                        <>
                            <div>App Settings Coming Soon</div>
                        </>
                    )}
                    {activeButton === 'privacy' && (
                        <>
                            <div className='SettingsPrivacyTitle'>Privacy Statement</div>
                            <div className='SettingsPrivacyStatement'>
                                <p>
                                    We prioritize your privacy. Your personal recordings are kept secure and confidential. We never share or
                                    sell your data. Our aim is to allow you to use our service confidently without having to worry about your
                                    information being stolen or sold.
                                </p>
                                <p>
                                    We may collect certain information when you use our app, such as your name, email address, and device
                                    information. Additionally, our app may access your device's microphone to record audio files as per your
                                    explicit permission.
                                </p>
                                <p>
                                    We never share your personal information with third parties for marketing purposes. However, we may share
                                    anonymous and aggregated usage statistics to improve our app's performance and features.
                                </p>
                                <p>
                                    We may use cookies and similar technologies to enhance your app experience. These technologies do not collect
                                    personally identifiable information.
                                </p>
                                <p>
                                    We reserve the right to update this Privacy Policy periodically. Any changes will be posted on this page, and
                                    your continued use of our app after such modifications will constitute your acceptance of the updated terms.
                                </p>
                                <p className='SettingsPrivacySignOff'> - The Cassette Team</p>
                            </div>
                        </>
                    )}
                    {activeButton === 'account' && (
                        <>
                            <div className='SettingsProfilePicture'>
                                <div className='SettingsProfilePictureImage'></div>
                            </div>
                            <div className='SettingsAccountContent'>
                                <div>Username: Sun-Ken Mob</div>
                            </div>
                            <div className='SettingsAccountContent'>
                                    <div className='SettingsAccountStatsSpacing'>Date Created: 08/02/2023</div>
                                    <div className='SettingsAccountStatsSpacing'>Number of Cassettes: 21</div>
                                    <div className='SettingsAccountStatsSpacing'>Number of Collections: 4</div>
                            </div>
                            <div className='SettingsAccountContent'>
                                <div className='SettingsAccountButton SettingsAccountButtonLogout'>Logout</div>
                            </div>
                            <div className='SettingsAccountContent'>
                                <div className='SettingsAccountButton SettingsAccountButtonDelete'>Delete Account</div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SettingPage;
