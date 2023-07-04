import {FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE} from './actionsTypes'; 
import axios from 'axios';

export const fetchPostRequest = () => {
    return {
        type: FETCH_POST_REQUEST
    }
}

export const fetchPostSuccess = (data) => {
    return {
        type: FETCH_POST_SUCCESS,
        payload: data
    }
}

export const fetchPostFailure = (error) => {
    return {
        type: FETCH_POST_FAILURE,
        payload: error
    }
}

// how to make api request in redux: 

export const fetchPosts = ()  =>{
     return  (dispatch) =>{
            dispatch(fetchPostRequest()) 
            axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                console.log(response.data)
                dispatch(fetchPostSuccess(response.data))
            })
            .catch(error => dispatch(fetchPostFailure(error.message)))
     }
}
