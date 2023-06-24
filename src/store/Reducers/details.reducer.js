const intialState = {
    status: "idle",
    error: "error",
    data: {},
}


const detailsReducer = (state = intialState, action) => {
    switch (action.type) {
        case 1:

        return {
                ...state,
                status: 1,
                data: action.payload,
            }
        case 2:
            return {
                ...state,
                status: 2,
            }
        case 0:
            return {
                ...state,
                status: 0,
                error: action.error.toString()
            }
        default: 
            return state;
    }
}



export default detailsReducer;