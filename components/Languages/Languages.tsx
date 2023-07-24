import React from 'react'
import {useState,useEffect} from "react"
import Animation from './Animation'
import MainPage from './MainPage'

const Languages = () => {
    const [animation,setAnimation] = useState(true)
    useEffect(()=>{
        setTimeout(() => {
            setAnimation(false)
        }, 900);
    },[])
  return (
    <div>{animation? <Animation/> : <MainPage/>}</div>
  )
}

export default Languages