import { Card } from "react-bootstrap";
import "./ErrorModal.css";

const ErrorModal = (props) => {
  return (
    <>
      <div className="backdrop" onClick={props.onOkay}>
        <Card id="error" className="errorModal">
          <h1 className="header">{props.errorTitle}</h1>
          <p>{props.errorMessage}</p>
          <button id="button" className="btn btn-primary btn-sm" onClick={props.onOkay}>
            Okay
          </button>
        </Card>
      </div>
    </>
  );
};

export default ErrorModal;
