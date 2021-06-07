import ClickAwayListener from "react-click-away-listener";

const Modal = (props) => {
  const handleClickAway = () => {
    props.setOpenModal(null);
  };

  return (
    <div className="fixed inset-0 w-screen h-screen flex flex-col justify-center items-center z-10 bg-gray-400 bg-opacity-50 px-6">
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className="w-96 flex flex-col justify-center items-center bg-white rounded-lg shadow-lg">
          {props.children}
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default Modal;
