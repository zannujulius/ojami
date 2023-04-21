import Backdrop from "../Backdrop";

const Address = ({ open, setopen }) => {
  return (
    <Backdrop open={open} className="">
      <div className="w-screen h-screen flex items-center justify-center animate__animated animate__fadeInUp">
        <div className="w-[400px] bg-white rounded-md p-3"></div>
      </div>
    </Backdrop>
  );
};

export default Address;
