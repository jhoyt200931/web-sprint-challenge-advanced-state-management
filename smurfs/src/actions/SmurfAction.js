import axios from 'axios';


export const ADD_SMURF = 'ADD_SMURF';
export const GET_SMURFS_START = 'GET_SMURFS_START';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAIL = 'GET_SMURFS_FAIL';
export const UPDATE_SMURF = 'UPDATE_SMURF';



export const getSmurfs = () => (dispatch) => {
    dispatch({type: GET_SMURFS_START});
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res);

            dispatch({type: GET_SMURFS_SUCCESS, payload: res.data.map(item => {
                return item;
            }) })
        })
        .catch(err => {
            dispatch({type: GET_SMURFS_FAIL, payload: err.message})
        })
}


export const updateSmurf = (e) => (dispatch) => {
    dispatch({type: UPDATE_SMURF, payload: {
        targetName: e.target.name,
        targetValue: e.target.value
    }})
}

// export const addSmurf = () => {
//     return
// }