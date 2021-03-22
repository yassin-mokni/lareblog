import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'

class Articles extends Component {
  static displayName = 'Articles'
  static propTypes = {
    articles: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.state = {
      //
    }
  }
  
  handleSubmit(e) {
    e.preventDefault()
    const article = this.state.article
    const { errors } = this.validator
    
    this.validator.validateAll(article)
      .then((success) => {
        if (success) {
          this.submit(article)
        } else {
          this.setState({ errors })
        }
      })
  }
  
  submit() {
  }

  renderArticles() {
    return this.props.articles.map((article, index) => {
      return <Article key={`article-${index}`}
                      index={index}
                      article={article}
                      handleComment={this.handleSubmit}/>
    })
  }
  
  render() {
    return (<section id="components-articles">
      <div className="container">
        <div className="row">
          { this.props.articles && this.renderArticles() }
        </div>
      </div>
    </section>)
  }
}

export default Articles
