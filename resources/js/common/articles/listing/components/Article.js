// import libs
import React from 'react'
import PropTypes from 'prop-types'

// import components
import { Link } from 'react-router-dom'

const displayName = 'ArticleComponent'
const propTypes = {
  index: PropTypes.number.isRequired,
  article: PropTypes.object.isRequired,
}

// const renderAuthor = (article) => {
//   return article.user && `By ${ article.user.name }`
// }

const renderPublishedAt = (article) => {
  return article.publishedAt && `at ${article.publishedAt.format('MMMM D, YYYY')}`
}


function render({ article }) {
  return <div className="col-12 col-sm-9 mb-5 mx-auto">
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{article.title}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{renderPublishedAt(article)}</h6>
        <p className="card-text">{article.description}</p>
        <Link to={`blog/${article.slug}`} className="card-link">Read More</Link>
      </div>
    </div>
    <div className="container mt-5">
      <div className="d-flex justify-content-stretch row">
        <div className="col-md-12">
          <div className="d-flex flex-column comment-section">
            <div className="bg-white p-2">
              <div className="d-flex flex-row user-info">
                <div className="d-flex flex-column justify-content-start">
                  <span className="d-block font-weight-bold name">Marry Andrews</span>
                </div>
              </div>
              <div className="mt-2">
                <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
            <div className="bg-light p-2">
              <div className="d-flex flex-row align-items-start">
                {/* <form onSubmit={this.handleComment}> */}
                <textarea className="form-control ml-1 shadow-none textarea"></textarea>
                {/* </form> */}
              </div>
              <div className="mt-2 text-right">
                <button className="btn btn-primary btn-sm shadow-none" type="button">Post comment</button>
                <button className="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

render.displayName = displayName
render.propTypes = propTypes

export default render
