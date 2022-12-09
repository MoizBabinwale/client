import * as api from '../api/index'
export const uploadimage = (imageData, navigate) => async (dispatch) => {
        try {
            const { data } = await api.postImage(imageData)
            dispatch({ type: "POST_IMAGE", payload: data})
            dispatch(fetchAllImages())
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

export const fetchAllImages = () => async (disptach) => {
    try {
        const { data } = await api.getAllImage()
        disptach({ type: 'FETCH_ALL_QUESTIONS', payload: data})
    } catch (error) {
        console.log(error)
    }
}
export const postImage = (imageData) => async (dispatch) => {
    try {
        const { id, noOfAnswers, imageBody, userAnswered } = imageData;
        const { data } = await api.postAnswer( id, noOfAnswers, imageBody, userAnswered )
        dispatch({ type: 'POST_IMAGE', payload: data})
        dispatch(fetchAllImages())
    } catch (error) {
        console.log(error)
    }
}