import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Protected = (props) => {
    const navigate=useNavigate()
    const {HomeComp} = props

    useEffect(() => {
        let login = localStorage.getItem("user-info")
        if (!login){
            navigate("/SignIn")
        }
    }, [])
    
    
  return (
    <div>
        <HomeComp />
        {/* <BlankPage /> */}
        {/* <Form /> */}
    </div>
  )
}
