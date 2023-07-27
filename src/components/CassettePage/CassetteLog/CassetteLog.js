import './CassetteLog.css';

const CassetteLog = ({mainText, dateCreated,totalTime}) => {

    return (
        <div className='CassetteLogBackground'>
            <div className='CassetteLogDelete'>
                <div className='CassetteLogDeleteButton'></div>
            </div>
            <div className='CassetteLogTitle CassetteLogTextCenter'>{mainText}</div>
            <div className='CassetteLogDateCreated CassetteLogTextCenter'>{dateCreated}</div>
            <div className='CassetteLogTotalLength CassetteLogTextCenter'>{totalTime}</div>
            <div className='CassetteLogPlayButton'>
                <div className='CassetteLogPlayButtonStart'></div>
            </div>
        </div>
        );
    }

export default CassetteLog;