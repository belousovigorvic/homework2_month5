import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import classes from './Posts.module.css'
import { MyContext } from '../../App'
import { ModeContext } from '../../App'

const Posts = () => {
  const URL = 'https://dummyjson.com/posts'
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get(URL)
      .then(response => setData(response.data))
      .catch(error => console.log('Ошибка', error.message))
  }, [])

  const [context, setContext] = useContext(MyContext)

  return (
    <div className={classes.posts}>
      <h1 className={classes.postsTitle}>Posts</h1>
      {data.posts ? (
        data.posts.map(post => (
          <div className={classes.post} key={post.id}>
            <h2 className={classes.title}>{post.title}</h2>
            <p className={classes.body}>{post.body}</p>
            <div>
              <span>User Id: </span>
              <span>{post.userId}</span>
            </div>
            <p>Tags: </p>
            <div className={classes.post__bottom}>
              <ul className={classes.tags}>
                {post.tags.map((tag, id) => (
                  <li className={classes.tag} key={id}>
                    {tag}
                  </li>
                ))}
              </ul>
              <div>
                <span>&#128077;</span>
                <span>{post.reactions}</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
      {context.map(post => (
        <div className={classes.post} key={post.userId}>
          <h2 className={classes.title}>{post.title}</h2>
          <p className={classes.body}>{post.body}</p>
          <div>
            <span>User Id: </span>
            <span>{post.userId}</span>
          </div>
          <p>Tags: </p>
          <div className={classes.post__bottom}>
            <ul className={classes.tags}>
              <li className={classes.tag}>{post.tags}</li>
            </ul>
            <div>
              <span>&#128077;</span>
              <span>0</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Posts
