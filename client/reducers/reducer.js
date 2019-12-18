import axios from 'axios'

const initialState = {
  allComments: []
}

const GOT_COMMENTS = 'GOT_COMMENTS'

const gotComments = allComments => ({
  type: GOT_COMMENTS,
  allComments
})

export const getComments = () => {
  return async dispatch => {
    const allComments = await axios.get('/api/comments')
    dispatch(gotComments(allComments.data))
  }
}

export const addComment = newCommentData => {
  return async dispatch => {
    await axios.post('/api/comments', newCommentData)
    dispatch(getCampuses())
  }
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case GOT_COMMENTS: {
      return { allComments: action.allComments }
    }
    default:
      return state
  }
}

export default reducer
