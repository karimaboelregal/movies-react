import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useSelector, useDispatch } from "react-redux"
import { closeModal } from "../actions/modal.actions";
import {Link} from "react-router-dom";
export default function CustomModal() {
    const modalData = useSelector(({ modalReducer }) => modalReducer.data);
    const show = useSelector(({ modalReducer }) => modalReducer.show);
    const dispatch = useDispatch();
    const style = show ? {
        display: "block",
        opacity: 1,
        maxHeight: "100vh",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"

    } : {
        display: "none",
        opacity: 0
    };

    show ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
    console.log(modalData);
    return show?(
        <div className="modal fade bd-example-modal-lg" style={style} role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="row">
                        <div className="col-md-5 ">
                            <img id="modal-img" className="w-100 h-100" src={modalData.data.picture} />
                        </div>
                        <div className="col-md-7">
                            <div className="d-flex flex-column pl-3 justify-content-center">
                                <h1 className="pt-4" id="modal-title">{modalData.data.title}</h1>
                                <h4 id="modal-rating" className="pt-4 pb-4">{modalData.data.rating}</h4>
                                <p id="modal-desc">{modalData.data.overview}</p>
                            </div>
                            <div className="d-flex justify-content-center" style={{gap: "10px"}}>
                                <Link to={"/details/"+modalData.data.id} className="w-25"><button className="btn btn-primary w-100">Details</button></Link>
                                <button className="btn btn-danger w-25" onClick={() => dispatch(closeModal())}>Close</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ):("")
}