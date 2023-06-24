import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import detailsAction from "../actions/details.actions";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useParams } from 'react-router-dom';


export default function Details() {

    const dispatch = useDispatch();
    const status = useSelector(({ detailsReducer }) => detailsReducer.status);
    const data = useSelector(({ detailsReducer }) => detailsReducer.data);
    const param = useParams();

    useEffect(() => {
        dispatch(detailsAction(param.id));

    }, []);


    return status !== 2 ? (
        <div className="container pt-5" >
            <div className="row" style={{gap: "20px"}}>
                <div className="col-md-3" style={{height: "500px"}}>
                    <img src={data["picture"]} className="h-100"/>
                </div>
                <div className="col-md-8">
                    <h2>{data["title"]}</h2>
                    <p>{data["overview"]}</p>
                </div>
            </div>
        </div>
    ) : "loading"

}