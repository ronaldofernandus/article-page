import React from 'react'
import { Button, Input, TextArea,Gap,Link} from '../../components/addOns'
import Upload from '../Upload'
import './createArticle.css'
import { useNavigate } from 'react-router-dom'

const AddPostingPage = () => {
  const navigate= useNavigate();
  return (
    <div className="blog-post">
      <Link title="kembali" onClick={()=> navigate('/')}/>
      <p className="title">Content New Blog Post</p>
      <Input label="Post Title"/>
      <Upload/>
      <TextArea/>
      <Gap height={20}/>
      <div className="button-action">
      <Button title="Save"></Button>
      </div>
      
    </div>
  )
}

export default AddPostingPage