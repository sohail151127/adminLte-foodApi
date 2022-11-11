import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import HomePage from './HomePage'

export const Protected = ( ) => {
    const navigate=useNavigate()
    // let HomePage = props.comp

    useEffect(() => {
        if (localStorage.getItem("user-info")){
            navigate("/HomePage")
        } else{
            navigate("/SignIn")
        }
    }, [])
    
    
  return (
    <div>
        <HomePage />
    </div>
  )
}
