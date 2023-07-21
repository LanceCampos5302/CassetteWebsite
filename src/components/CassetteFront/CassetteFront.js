import './CassetteFront.css';

const CassetteFront = ({ mainText, subText, backgroundColor, highlightColor }) => {
    return (
      <div className='CassetteFrontBackground' style={{backgroundColor: backgroundColor}}>
        <div className='CassetteFrontContent'>
            <div className='CassetteFrontTopText'>
              <div>{mainText}</div>
            </div>
            <div className='CassetteFrontMiddle' style={{backgroundColor: highlightColor}}>
                <div className='CassetteFrontColor' style={{backgroundColor: backgroundColor}}>
                    <div className='CassetteFrontCircle' style={{backgroundColor: backgroundColor}}></div>
                    <div className='CassetteFrontRectangle' style={{backgroundColor: backgroundColor}}></div>
                    <div className='CassetteFrontCircle' style={{backgroundColor: backgroundColor}}></div>
                </div>
            </div>
            <div className='CassetteFrontBottomText'>
              <div>Created: {subText}</div>
            </div>
        </div>
      </div>
    );
  };

export default CassetteFront;