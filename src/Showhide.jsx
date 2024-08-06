
import React,{ useState } from 'react'

function Showhide() {
const [message,setMessage]=useState()
function show(){

    setMessage('Hello')}


function hide(){
   
    setMessage('')
}
    

    
  return (
    <>
     <div className="container-fluid bg-light m-3">
        <div className="card w-50" style={{position:'relative',left:'20%',height:'400px',top:'100px'}}>
        <div className="img">
        <img src="https://cdn.dribbble.com/users/241617/screenshots/1087466/mail.gif" alt=""  className='w-25' style={{position:'relative',left:'270px',top:'100px'}}/>
        </div>
        <div className="input" style={{position:'relative',left:'250px',top:'180px'}}>
                <p>{message}</p>
            </div>
        <div className="d-flex" style={{position:'relative',left:'250px',top:'180px'}}>
    
            <button className='btn btn-success me-5' onClick={show}>SHOW</button>
            <button className='btn btn-danger me-5' onClick={hide}>HIDE</button>
        </div>
        </div>
        </div> 
    </>
  )
}

export default Showhide
