import React, { useEffect, useRef } from 'react';
import './CassetteSide.css';

const CassetteSide = ({ mainText, backgroundColor = '#fff', highlightColor = '#f00' }) => {
  const divRef = useRef(null);

  useEffect(() => {
    const adjustFontSize = () => {
      const div = divRef.current;
      const container = div.parentElement; // Parent container of the text div

      let fontSize = 25; // Starting font size in pixels
      div.style.fontSize = fontSize + 'px';

      // Reduce font size until the text fits completely within the div
      while (div.scrollHeight > container.clientHeight || div.scrollWidth > container.clientWidth) {
        fontSize--;
        div.style.fontSize = fontSize + 'px';

        // To avoid infinite loops, set a minimum font size
        if (fontSize === 1) {
          break;
        }
      }
    };

    adjustFontSize();

    // Call the adjustFontSize function when the window is resized
    window.addEventListener('resize', adjustFontSize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', adjustFontSize);
    };
  }, [mainText]);

  return (
    <div className='CassetteSideBackground' style={{ backgroundColor }}>
      <div className='CassetteSideContent'>
        <div className='CassetteSideColor' style={{ backgroundColor: highlightColor }}></div>
        <div className='CassetteSideText' ref={divRef}>
          <div className='CassetteSideMainText'>{mainText}</div>
        </div>
      </div>
    </div>
  );
};

export default CassetteSide;
