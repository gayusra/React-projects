import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import './password.css'
function Passwordcheck() {
    //define state variables for password,message and progress
    const [password,setPassword] = useState('')
    const [message,setMessage] = useState('')
    const [progress,setProgress] = useState('')

    const [hidePassword,setHidePassword] = useState(true)

    //function to handle changes in the password input
    const handlePassword = (passwordValue) =>{
        const strengthChecks = {
            length:0,
            hasUpperCase:false,
            hasLowerCase:false,
            hasDigit:false,
            hasSpecialChar:false,

        };
        //update the strength checks based on the password value
        strengthChecks.length = passwordValue.length >=8 ? true:false;
        strengthChecks.hasUpperCase = /[A-Z]+/.test(passwordValue)
        strengthChecks.hasLowerCase = /[a-z]+/.test(passwordValue)
        strengthChecks.hasDigit = /[0-9]+/.test(passwordValue)
        strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(passwordValue)

        //create a list of a verified strength checks
        let verifiedList = Object.values(strengthChecks).filter((value)=>value)

        //determine the password strength based on the verified checks
        let strength = 
        verifiedList.length === 5 ? "Strong" : verifiedList.length >=2 ? "Medium" :"Weak";

        //update the password.progress, and message state variables
        setPassword(passwordValue)
        setProgress(`${(verifiedList.length / 5 ) * 100}%`)
        setMessage(strength)

        
    }

    //function to get the color for the progress
    const getActiveColor = (type) =>{
        if(type === "Strong") return "#3fbb60";
        if(type === "Medium") return "#fe804d";
        return "#ff0054";
    }
  return (
    <div className='container'>
        <div className='card'>
            <div className='card_header'>
                <h2 className='title'>password strength checker</h2>

            </div>

            <div className='card-body'>
                <div className='input-container'>
                    <div className='input-box'>
                        <input type={hidePassword ? 'password':'text'} value={password} className='input'
                         onChange={({target})=>{handlePassword(target.value)}}
                          placeholder='Enter password' />

                         <a href="#" className='toggle-btn' onClick={()=>{setHidePassword(!hidePassword)}}>
                        <span className='material-icons eye-icon' style={{color:!hidePassword ? '#1364ff' : '#c3c3c3'}}>
                           <VisibilityIcon/>
                        </span>
                    </a> 

                    </div>

                    <div className='progress-bg'>
                        <div className='progress' 
                        style={{
                            width:progress,
                            backgroundColor:getActiveColor(message)
                            
                            }}>

                        </div>

                    </div>

                   
                 

                </div>

                {password.length == 0 ? (
                    <p className='message' style={{color:getActiveColor(message)}}>Your password is {message}</p>
                ): null }

            </div>

        </div>
       
    </div>
  )
}

export default Passwordcheck
