import axios from 'axios'

export const GET_DATA = "GET_DATA"
export const UPDATE_SMURFS = "UPDATE_SMURFS"
export const SET_ERROR = "SET_ERROR"
export const POST_SMURF = "POST_SMURF"

export const getData = () => dispatch => {
    dispatch({ type: GET_DATA })
    axios
        .get('http://localhost:3333/smurfs')
        .then(response => {
            console.log(response)
            dispatch({ type: UPDATE_SMURFS, payload: response.data })
        }) 
        .catch(error => {
            console.log(error)
            dispatch({ type: SET_ERROR, payload: 'Error fetching data from api'})
        })
}