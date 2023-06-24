const openDispatch = (data) => { return { type: "open", data: data } };
const closeDispatch = () => { return { type: "close" } };



export const openModal = (data) => (dispatch) => {
    dispatch(openDispatch(data));
}

export const closeModal = () => (dispatch) => {
    dispatch(closeDispatch());
}


