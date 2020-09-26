import { GET_SMURFS_START, GET_SMURFS_SUCCESS, GET_SMURFS_FAIL, UPDATE_SMURF } from '../actions/SmurfAction';

const initialState = {
    smurfs: [],
    isGettingSmurfs: false,
    error: '',
    newSmurf: {
        name: '',
        age: 1,
        height: '',
        id: 1
    }
}


export const SmurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SMURFS_START:
            return {
                ...state,
                isGettingSmurfs: true
            }
        case GET_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: [
                    ...state.smurfs,
                    action.payload
                ],
                isGettingSmurfs: false
            }    
        case GET_SMURFS_FAIL:
            return {
                ...state,
                error: action.payload,
                isGettingSmurfs: false
            }
        case UPDATE_SMURF: 
            return {
                ...state,
                

                newSmurf: {
                    ...state.newSmurf,
                    [action.payload.targetName]: action.payload.targetValue
                }
            }

        default: 
        return state;
    }
}