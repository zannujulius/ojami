import { Button } from "../Button";
import CloseButton from "../CloseButton";
import Rule from "../Rule/Index";
import "./styles.css";
import { IoIosArrowDown } from "react-icons/io";
const MobileNav = ({ open, setopen }) => {
  return (
    <div className="fixed h-screen w-screen bg-[#00000030] top-0 right-0 z-[300]">
      <div className="mobile-draw w-[250px] h-screen bg-white px-3  pt-4">
        <div className="flex justify-between items-center">
          <div className="font-Titan text-black font-semibold">OjaMi</div>
          <CloseButton closeBtn={setopen} />
        </div>
        <Rule />
        <div className="mt-4">
          <div className="my-6 flex items-center justify-between py-2 px-1 rounded-md cursor-pointer hover:bg-gray-100">
            <div className="">Categories</div>
            <div className="">
              <IoIosArrowDown />
            </div>
          </div>
          <div className="my-6 py-2 px-1 rounded-md cursor-pointer hover:bg-gray-100 flex justify-between items-center transition-all duration-100 ease-in-out">
            <div className="">My Orders</div>
            <div className="flex items-center justify-center w-[20px] h-[20px] text-[13px] bg-primary text-white rounded-full">
              0
            </div>
          </div>
          <div className="my-6 py-2 px-1 rounded-md cursor-pointer hover:bg-gray-100 flex justify-between items-center transition-all duration-100 ease-in-out">
            <div className="">Carts</div>
            <div className="flex items-center justify-center w-[20px] h-[20px] text-[13px] bg-primary text-white rounded-full">
              0
            </div>
          </div>
          <div className="mt-20">
            <div className="my-4">
              <Button
                text={"Login"}
                bg={"#fff"}
                color={"#000"}
                border={"1px solid #c1c1c1"}
                fontSize={14}
              />
            </div>
            <div className="my-4">
              <Button text={"Register"} fontSize={14} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
