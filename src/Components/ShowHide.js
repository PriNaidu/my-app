import React,{useState} from 'react'

 function ShowHide() {
 const [show , setShow] = useState(true);
  return (
    <div>
      <h1>Show hide using react hooks Usestate</h1>
      <p>
        This pargraph will hide
      </p>
    </div>
  )
}
export default ShowHide