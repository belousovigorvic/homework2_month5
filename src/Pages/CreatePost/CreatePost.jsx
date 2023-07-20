import React, { useState } from 'react'
import classes from './CreatePost.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
  const [postData, setPostData] = useState({
    title: '',
    body: '',
    tags: '',
    userId: ''
  })

  const navigate = useNavigate()

  const handlePostData = () => {
    axios
      .post('https://dummyjson.com/posts/add', postData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log(response.data)
        navigate('/posts')
      })
      .catch(error => {
        console.error('Ошибка', error)
      })
  }

  const handleSubmit = e => {
    e.preventDefault()
    handlePostData()
  }

  const handleInputChange = e => {
    const { name, value } = e.target
    setPostData({ ...postData, [name]: value })
  }

  // Описание каждого инпута
  const inputFields = [
    { name: 'title', type: 'text', placeholder: 'Title' },
    { name: 'body', type: 'text', placeholder: 'Body' },
    { name: 'tags', type: 'text', placeholder: 'Tags' },
    { name: 'userId', type: 'number', placeholder: 'User Id' }
  ]

  return (
    <>
      <h1 className={classes.createPost__title}>Create Post</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        {inputFields.map(field => (
          <input
            key={field.name}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={postData[field.name]}
            onChange={handleInputChange}
            required
          />
        ))}
        <button type="submit">Send</button>
      </form>
    </>
  )
}

export default CreatePost
