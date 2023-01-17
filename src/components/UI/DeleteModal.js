import { Card } from "react-bootstrap";
import "./DeleteModal.css";

const DeleteModal = (props) => {
  return (
    <>
      <div className="backdrop" onClick={props.onNo}>
        <Card id="delete" className="errorModal">
          <h1 className="header">Delete Item</h1>
          <p>Are you sure?</p>
          <span>
          <button id="button" className="btn btn-primary btn-sm" onClick={props.onYes}>
            Yes
          </button>
          <button id="button" className="btn btn-primary btn-sm" onClick={props.onNo}>
            No
          </button>
          </span>
        </Card>
      </div>
    </>
  );
};

export default DeleteModal;
