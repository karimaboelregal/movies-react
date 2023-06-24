const intialState = {
    status: "idle",
    error: "error",
    data: [],
    highestRating: 0,
    highestName: "",
    page: 1,
}


const postReducer = (state = intialState, action) => {
    switch (action.type) {
        case "success":
            return {
                ...state,
                status: "success",
                data: action.payload,
                highestName: action.name,
                highestRating: action.rating,
                page: action.page,
                error: ""
            }
        case "pending":
            return {
                ...state,
                status: "pending",
                data: action.payload
            }
        case "failure":
            return {
                ...state,
                status: "failure",
                error: action.error.toString()
            }
        default: 
            return state;
    }
}



export default postReducer;