import './index.css'

const CommentItem = props => {
  const {item, deleteComment, toggleLike} = props
  const {id, name, comment, colorClassName, isLike} = item
  const remove = () => {
    deleteComment(id)
  }
  const imgUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const changeColor = () => {
    toggleLike(id)
  }

  const likeColor = isLike ? 'blueColor' : ' '

  return (
    <>
      <li>
        <div className="commentContainer">
          <div className="cont">
            <div className={`profile ${colorClassName}`}>
              <p className="intial">S</p>
            </div>
            <div className="comnt-cont">
              <div className="profile-Cont">
                <h1 className="ProfileName">{name}</h1>
                <p className="time">Less than a minute ago</p>
              </div>
              <p className="comment">{comment}</p>
            </div>
          </div>
          <div className="like-del-cont">
            <div className="like-cont">
              <button className="likeBtn" type="button" onClick={changeColor}>
                <img className="like" src={imgUrl} alt="Like" />
              </button>
              <p className={`likeName ${likeColor}`}>Like</p>
            </div>
            <div className="del-cont">
              <button
                data-testid="delete"
                className="delete"
                type="button"
                onClick={remove}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
                  alt="delete"
                />
              </button>
            </div>
          </div>
        </div>
        <hr className="hr" />
      </li>
    </>
  )
}
export default CommentItem
