import React from 'react'
import {Header} from "@components"

export const  Layout:React.FC=({children})=> {
  return (
    <>
    <Header/>
    <h3>children here</h3>
    {children}
    </>
  )
}
