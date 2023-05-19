import React, { Fragment, useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

const CustomCarousel = () => {
  const [state, setState] = useState(false)
  const ref = useRef(null)
  return ( 
   <Fragment>
    <div className="comments">
      <div className="comment">
        <div className="avatar">
          <img src=" " alt="" />
          <button onClick={() => setState(!state)}>Change View</button>
        </div>
        <CSSTransition  in={state} classNames={'alert'} timeout={200} unmountOnExit>
          <div  className='alert'>
            <h1>This View Will Appear</h1>
            <p> more info about this view</p>
          </div>
        </CSSTransition>
      </div>
    </div>
   </Fragment>
  )
}

export default CustomCarousel