// React
import ReactDOM from "react-dom";

// Components
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const FilterModal = ({closeModal}) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop closeModal={closeModal} />,
        document.getElementById("root-backdrop")
      )}
      {ReactDOM.createPortal(
        <Modal closeModal={closeModal} />,
        document.getElementById("root-modal")
      )}
    </>
  );
};

export default FilterModal;
