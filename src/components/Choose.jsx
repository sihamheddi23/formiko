import React from 'react'
import FormikHooks from './FormikHooks'
import FormikTag from './FormikTag'
import FormikWithYup from './FormikWithYup'
import HelloMessage from './HelloMessage'

export default function Choose(props) {
    const {step} = props
    if (step==0) {
      return (<><FormikHooks/></>)  
    }
    else if (step==1) {
      return (  <><FormikTag/></> )
    }
    else if(step==2){
      return ( <><FormikWithYup/></>)
    }
    else {
  return (
    <>
        <HelloMessage/>
    </>
  )
    }
}
