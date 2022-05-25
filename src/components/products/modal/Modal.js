// Components
import Sidebar from "./../sidebar/index";

const Modal = ({ closeModal }) => {
  return (
    <div className="fixed inset-x-0 top-20 z-40 m-auto block">
      <Sidebar />
      <button
        onClick={closeModal}
        className="w-full bg-red-300 py-3 text-2xl font-bold text-white hover:bg-red-500"
      >
        Close
      </button>
    </div>
  );
};

export default Modal;
