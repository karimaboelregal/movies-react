const intialState = {
    show: false,
    data: {},
}


const modalReducer = (state = intialState, action) => {
    switch (action.type) {
        case "open":
            return {
                show: true,
                data: action.data,
            }
        case "close":
            return {
                show: false,
                data: {},
            }
        default: 
            return state;
    }
}



export default modalReducer;