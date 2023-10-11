import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';




const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = [];
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const BooksCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    

    useEffect(() => {
        set_entity({});
    }, [props.show]);
    const onSave = async () => {
        let _data = {
            bookName: _entity.bookName,
            year: _entity.year,
            publisher: _entity.publisher,
            author: _entity.author,
            edition: _entity.edition,
            genre: _entity.genre,
            language: _entity.language,
        };

        setLoading(true);
        try {
            const result = await client.service("books").create(_data);
            props.onHide();
            props.alert({ type: "success", title: "Create", message: "Created successfully" });
            props.onCreateResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create" });
        }
        setLoading(false);
    };
    

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError("");
    };
    

    return (
        <Dialog header="Create" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div role="books-create-dialog-component">
            <div>
                <p className="m-0">BookName:</p>
                <InputText className="w-full mb-3" value={_entity?.bookName} onChange={(e) => setValByKey("bookName", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Year:</p>
                <InputText type="number" className="w-full mb-3" value={_entity?.year} onChange={(e) => setValByKey("year", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Publisher:</p>
                <InputText className="w-full mb-3" value={_entity?.publisher} onChange={(e) => setValByKey("publisher", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Author:</p>
                <InputText className="w-full mb-3" value={_entity?.author} onChange={(e) => setValByKey("author", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Edition:</p>
                <InputText type="number" className="w-full mb-3" value={_entity?.edition} onChange={(e) => setValByKey("edition", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Genre:</p>
                <InputText className="w-full mb-3" value={_entity?.genre} onChange={(e) => setValByKey("genre", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Language:</p>
                <InputText className="w-full mb-3" value={_entity?.language} onChange={(e) => setValByKey("language", e.target.value)}  />
            </div>
                <small className="p-error">
                    {Array.isArray(error)
                        ? error.map((e, i) => (
                              <p className="m-0" key={i}>
                                  {e}
                              </p>
                          ))
                        : error}
                </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    return {}
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(null, mapDispatch)(BooksCreateDialogComponent);
