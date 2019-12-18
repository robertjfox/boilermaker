import React from 'react'
import { connect } from 'react-redux'
import { getComments } from '../reducers/reducer.js'

class SayHello extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getComments()
  }

  render() {
    const { allComments } = this.props
    console.log(allComments)
    return (
      <div id="sayHelloCont">
        <div>
          <h1>SAY HELLO!</h1>
        </div>
        <div id="commentCont">
          {allComments.map(comment => {
            return (
              <h2 key={comment.id} className="comment">
                {comment.content}
              </h2>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    allComments: state.allComments
  }
}

const mapDispatch = dispatch => {
  return {
    getComments: () => dispatch(getComments())
  }
}

export default connect(
  mapState,
  mapDispatch
)(SayHello)
