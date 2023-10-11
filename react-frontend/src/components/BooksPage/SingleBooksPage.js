import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { InputText } from 'primereact/inputtext';

const SingleBooksPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("books")
            .get(urlParams.singleBooksId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Books", type: "error", message: error.message || "Failed get books" });
            });
    }, []);

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
    };

    const goBack = () => {
        navigate("/books", { replace: true });
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Books</h3>
                </div>
                <p>books/{urlParams.singleBooksId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">BookName</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.bookName}</p></div>
                    <label className="text-sm text-primary">Year</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.year}</p></div>
                    <label className="text-sm text-primary">Publisher</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.publisher}</p></div>
                    <label className="text-sm text-primary">Author</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.author}</p></div>
                    <label className="text-sm text-primary">Edition</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.edition}</p></div>
                    <label className="text-sm text-primary">Genre</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.genre}</p></div>
                    <label className="text-sm text-primary">Language</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.language}</p></div>
            
                </div>
            </div>
        </div>
    );
};

const mapState = (state) => {
    return {};
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(SingleBooksPage);
