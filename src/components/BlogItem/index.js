// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, avatarUrl, imageUrl, topic, author} = blogData

  return (
    <Link to={`/blogs/${id}`} className="blog-link">
      <li className="Blog-list">
        <img src={imageUrl} alt={title} className="blog-list-img" />
        <div className="blog-info">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-info">
            <img src={avatarUrl} alt="avatar" className="avatar-logo" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
