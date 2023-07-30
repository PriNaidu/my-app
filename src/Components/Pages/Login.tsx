import React from 'react'

const Login = () => {
  return (
    <>
    <div className="main-c">
        <div className="auth-c">
            <div className="left-c">
                <img src="https://res.cloudinary.com/dghqyted6/image/upload/v1690637201/image_5_bwll40.png" alt="" />
            </div>
    <div className="right-c">
    <img src="https://res.cloudinary.com/dghqyted6/image/upload/v1690628221/COIN_HD_1_pmoayn.png" alt="" />
        <h1>
            International Infrastructure of Business & Trade
        </h1>
        <div>
            <label htmlFor="">Enter your e-mail ID</label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="">Enter your Password</label>
            <input type="text" />
        </div>
        <button>Login</button>
    </div>
        </div>
    </div>
    </>
  )
}

export default Login