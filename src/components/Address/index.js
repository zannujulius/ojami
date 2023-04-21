import Backdrop from "../Backdrop";
import CloseButton from "../CloseButton";
import { GoLocation } from "react-icons/go";

const Address = ({ open, setopen }) => {
  return (
    <Backdrop open={open} className="">
      <div className="w-[90%] sm:w-[90%] md:w-[400px] lg:w-[500px] bg-white rounded-md p-3 ">
        <div className="flex items-center justify-end">
          <CloseButton closeBtn={setopen} />
        </div>
        <div className="">
          <div className="text-[18px] font-semibold text-black text-center    ">
            Enter your location
          </div>
          <div className="text-normal mt-3 text-center text-lightprimary">
            Our services is currently limited to{" "}
            <span className="text-secondary">Lagos, and Abuja.</span>
          </div>
          <div className="text-center text-lightprimary">
            Enter nearest town or address
          </div>
          {/* input */}
          <div className="flex border-[1px] w-[90%] mx-auto rounded-md px-2 p-2 h-[45px] mt-4">
            <div className="flex items-center justify-center mr-3">
              <GoLocation />
            </div>
            <div className="">
              <input
                className="w-[100%] h-full outline-none focus:border-none"
                type="text"
              />
            </div>
          </div>
          <div className="text-center mt-6 text-lightprimary mb-[50px]">
            I just want to explore the website?{" "}
            <span className="text-primary px-2 cursor-pointer">Skip</span>
          </div>
        </div>
      </div>
    </Backdrop>
  );
};

export default Address;
