import React from 'react';
import Loader from '../Assets/Images/loader.gif'

export default function Loading () {
  
    return (
      <div className='text-center'>
        <img alt='' src={Loader} style={{mixBlendMode:"light"}}/>
      </div>
    );
}
