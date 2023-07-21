import './CassettePage.css';
import SideNavBar from '../SideNavBar/SideNavBar.js';
//import CassetteSide from '../CassetteSide/CassetteSide.js';

const CassettePage = () => {

    return (
        <div className='Background'>
            <SideNavBar/>
            <div className='CassettePageContainer'>
                <div className='TopBox'>
                    <div className='EjectButton'>
                        <div className='EjectTriangle'></div>
                    </div>
                </div>
                <div className='MidBox'>Mid Box</div>
                <div className='BottomBox'>Bottom Box</div>
            </div>
        </div>
        );
    }

export default CassettePage;