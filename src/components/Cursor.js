import React from 'react'
import { useRef } from 'react'

const Cursor = () => {
 const dot = useRef(null);
 const dotOutline = useRef(null);
  return (
    <>
        <div ref={dotOutline} className='cursor-outline'>Esther</div>
        <div ref={dot} className='cursor-dot'>Esther</div>
    </>
  )
}

export default Cursor