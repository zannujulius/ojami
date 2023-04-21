import { IoClose } from "react-icons/io5";
const CloseButton = ({ closeBtn }) => {
  return (
    <div
      className="flex items-center justify-center pt-2 text-black cursor-pointer"
      onClick={() => closeBtn(false)}
    >
      <IoClose size={24} />
    </div>
  );
};

export default CloseButton;
