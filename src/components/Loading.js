import React from 'react';
import '../styles/loading.css';


const Loading = () => {
  return (
    <div className='h-[70vh] flex justify-center items-center'>
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loading