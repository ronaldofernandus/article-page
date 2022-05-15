import React from 'react'
import { LoginBg } from '../../assets'
import './upload.css'

const Upload = () => {
  return (
    <div className="upload">
      <img className="preview" src={LoginBg} alt="preview"/>
<input type="file"/>
    </div>
  )
}

export default Upload