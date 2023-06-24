import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import postAction from "../actions/post.actions";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Post from "./Post.js";
import CustomModal from "./Modal";

export default function Posts() {

    const dispatch = useDispatch();
    const status = useSelector(({ postReducer }) => postReducer.status);
    const page = useSelector(({ postReducer }) => postReducer.page);
    const data = useSelector(({ postReducer }) => postReducer.data);


    useEffect(() => {
        dispatch(postAction(page));

    }, []);


    
    return (
        <>
        <CustomModal />
            <div className="container pt-5">


                <div className="row text-center justify-content-sm-center">
                    {status !== "pending" ? data.map((value, index) => {
                        return <Post key={index} data={value} />
                    }) : <div className="row justify-content-center" id="loading">
                        <div className="spinner-border" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div>
                    }
                </div>

                <div className="d-flex justify-content-center pb-5" style={{ gap: "5px" }}>
                    
                    {page>1?<button className="btn btn-danger" onClick={() => dispatch(postAction(page-1))}>Previous</button>:""}
                    <button className="btn btn-primary" id="next" onClick={() => dispatch(postAction(page +1))}>Next</button>

                </div>

            </div></>
    )

}