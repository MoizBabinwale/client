const postsReducer = (state= {data: null}, action) => {
    switch (action.type) {
        case "POST_IMAGE":
            return { ...state }
        case "POST_COMMENT":
            return { ...state }
        case 'FETCH_ALL_POSTS':
            return { ...state, data: action.payload}
        default:
            return state
    }
}
export default postsReducer