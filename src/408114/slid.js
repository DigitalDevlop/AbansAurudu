import React, { useState, useEffect } from 'react';
import './slid400114.css';
import FlipClock from 'x-react-flipclock';




function SlideB() {



  return (
    <div className='Second'>
      <div className='clock'>


        <FlipClock
          type="countdown"
          count_to="2024-04-14 24:00:00"
          units={[
            {
              sep: '',
              type: 'days',
              title: '',
            },
            {
              sep: ':',
              type: 'hours',
              title: '',
            },
            {
              sep: ':',
              type: 'minutes',
              title: '',
            },
            // {
            //   sep: ':',
            //   type: 'seconds',
            //   title: '',
            // },
          ]}
        />
      </div>
    </div>

  );
}

export default SlideB;
