import axios from 'axios';


export const ADD_SMURF = 'ADD_SMURF';
export const GET_SMURFS_START = 'GET_SMURFS_START';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';



export const getSmurfs = () => (dispatch) => {
    dispatch({type: GET_SMURFS_START});
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res);
            // dispatch({type: GET_SMURFS_SUCCESS, payload: })
        })
}




// export const addSmurf = () => {
//     return
// }