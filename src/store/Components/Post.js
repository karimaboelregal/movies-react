import { useDispatch } from "react-redux"
import {openModal} from "../actions/modal.actions";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Post.css"

export default function Post({data}) {
    const dispatch = useDispatch();
    return (
        <div className="col-md-3 col-sm-10 pb-3" onClick={() => dispatch(openModal({data:data}))}>
            <div className="card movie-card">
                <img src={data.picture} alt="" className="pb-3" />
                <span>{data.title}</span>
                <span>{data.rating}</span>
            </div>
        </div>

    )
}