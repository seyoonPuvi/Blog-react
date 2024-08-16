// Write your JS code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogItemData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      topic: data.topic,
      content: data.content,
    }
    this.setState({blogItemData: updatedData, isLoading: false})
  }

  render() {
    const {blogItemData, isLoading} = this.state
    const {title, author, avatarUrl, imageUrl, content} = blogItemData

    return isLoading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <div className="blog-item-details-cont">
        <h1 className="title">{title}</h1>
        <div className="author-info">
          <img src={avatarUrl} alt="avatar" className="avatar-logo" />
          <p className="author-name">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="blog-Item-details-img" />
        <p className="content">{content}</p>
      </div>
    )
  }
}

export default BlogItemDetails
