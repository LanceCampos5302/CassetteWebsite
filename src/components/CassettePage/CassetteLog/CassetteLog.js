import './CassetteLog.css';

const CassetteLog = ({mainText, key, audioData}) => {

    return (
        <div className='CassetteLogBackground'>
            <div className='CassetteLogTitle CassetteLogTextCenter'>{mainText}</div>
            <div className='CassetteLogDateCreated CassetteLogTextCenter'>{audioData.audioUrl}</div>
            <div className='CassetteLogTotalLength CassetteLogTextCenter'>{audioData.audioUrl}</div>
            <div className='CassetteLogPlayButton'>
                <div className='CassetteLogPlayButtonStart'></div>
            </div>
        </div>
        );
    }

export default CassetteLog;