import React, { Fragment, useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "../Styles/mainfile.css";
const CustomCarousel = () => {
  const [state, setState] = useState(1);

  return (
    <Fragment>
      <div className="comments">
        <button onClick={() => setState(state - 1)} style={{position: 'absolute', top: 0}}>pre</button>
        <button onClick={() => setState(state + 1)} style={{position: 'absolute', top: 0, left: 30}}>next</button>
        <div className="comment">
          {/* <div className="avatar">
        
          <button onClick={() => setState(!state)}>Change View</button>
        </div>
        <CSSTransition  in={state} classNames={'alert'} timeout={200} unmountOnExit>
          <div  className='alert'>
            <h1>This View Will Appear</h1>
            <p> more info about this view</p>
          </div>
        </CSSTransition> */}
          firstCard-enter
          firstCard-active
          <div className="wrapper">
            <div className="outer">
              <CSSTransition in={state === 2} timeout={300} classNames={'card'}>
                <div
                  className="card pre"
                  style={{
                    marginTop: "-100px",
                  }}
                >
                  {state - 1}
                  <a href="#">Follow</a>
                </div>
              </CSSTransition>


              <CSSTransition in={state === 3} timeout={300} classNames={'card'} >
                <div className="card cuss">
                  {state}
                  <a href="#">Follow</a>
                </div>
              </CSSTransition>


              <CSSTransition in={state === 4} timeout={300} classNames={'card'} >
                <div
                  className="card c1"
                  style={{
                    marginTop: "100px",
                  }}
                >
                  {state + 1}
                  <a href="#">Follow</a>
                </div>
              </CSSTransition>

              {/* <div className="card c2" >
          2
          <a href="#">Follow</a>
        </div>      
        <div className="card c3" >
          3
          <a href="#">Follow</a>
        </div>
        <div className="card c4" >
          4
          <a href="#">Follow</a>
        </div>
        <div className="card c5" >
          5
          <a href="#">Follow</a>
        </div>
        <div className="card c6" >
          6
          <a href="#">Follow</a>
        </div> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CustomCarousel;
