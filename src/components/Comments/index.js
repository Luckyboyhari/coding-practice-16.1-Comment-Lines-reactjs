import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    commentList: [],
    name: '',
    comment: '',
  }

  userName = event => {
    this.setState({name: event.target.value})
  }

  userComment = event => {
    this.setState({comment: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const colorNames =
      initialContainerBackgroundClassNames[
        Math.floor(Math.random() * initialContainerBackgroundClassNames.length)
      ]
    console.log(colorNames)
    const newList = {
      id: uuidv4(),
      name,
      comment,
      isLike: false,
    }
    this.setState(prevSate => ({
      commentList: [...prevSate.commentList, newList],
      name: '',
      comment: '',
    }))
  }

  delete = id => {
    const {commentList} = this.state
    const filterList = commentList.filter(each => each.id !== id)
    this.setState(prevSate => ({
      commentList: filterList,
      count: prevSate.count - 1,
    }))
  }

  like = id => {
    this.setState(prevSate => ({
      commentList: prevSate.commentList.map(each => {
        if (id === each.id) {
          return {...each, isLike: !each.isLike}
        }
        return each
      }),
    }))
  }

  render() {
    const {commentList, comment, name} = this.state
    return (
      <div className="bg-con">
        <div className="card1">
          <div className="card">
            <h1 className="head">Comments</h1>
            <p className="para">Say something about 4.0 Technologies</p>
            <form className="form-con" onSubmit={this.onSubmit}>
              <input
                placeholder="Your Name"
                className="input"
                type="text"
                value={name}
                onChange={this.userName}
              />
              <textarea
                placeholder="Your Comment"
                rows="7"
                cols="37"
                className="comment"
                value={comment}
                onChange={this.userComment}
              />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>

          <div className="image-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="image"
              alt="comments"
            />
          </div>
        </div>
        <hr className="horr-line" />
        <div className="card2">
          <div className="number">{commentList.length}</div>
          <p className="paragraph">Comments</p>
        </div>
        <ul className="un-con">
          {commentList.map(each => (
            <CommentItem
              key={each.id}
              item={each}
              deleteComment={this.delete}
              toggleLike={this.like}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
