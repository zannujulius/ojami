import { Link } from "react-router-dom";
import { Button } from "../Button";
import CloseButton from "../CloseButton";
import Rule from "../Rule/Index";
import "./styles.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

const MobileNav = ({ open, setopen }) => {
  const [dropdown, setdropdown] = useState(false);
  return (
    <div className="fixed h-screen w-screen bg-[#00000030] top-0 right-0 z-[300]">
      <div className="mobile-draw w-[250px] h-screen bg-white px-3  pt-4">
        <div className="flex justify-between items-center">
          <div className="font-Titan text-black font-semibold">OjaMi</div>
          <CloseButton closeBtn={setopen} />
        </div>
        <Rule />
        <div className="mt-4">
          <Link
            to={"/shopping"}
            onClick={() => setopen(false)}
            className="my-6 flex items-center justify-start py-2 px-1 rounded-md cursor-pointer hover:bg-gray-50"
          >
            <div className="">Shopping</div>
          </Link>
          <div
            onClick={() => setdropdown(!dropdown)}
            className="mt-6 mb-2 flex items-center justify-between py-2 px-1 rounded-md cursor-pointer hover:bg-gray-50"
          >
            <div className="">Categories</div>
            <div className="">
              {dropdown ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </div>
          </div>
          {dropdown && (
            <div className="">
              <div className="my-1 flex items-center justify-between py-2 px-1 rounded-md cursor-pointer hover:bg-gray-50">
                <div className="">Fresh</div>
                <div className="">
                  <input type="checkbox" className="" placeholder="" />{" "}
                </div>
              </div>
              <div className="my-1 flex items-center justify-between py-2 px-1 rounded-md cursor-pointer hover:bg-gray-50">
                <div className="">Frozen</div>
                <div className="">
                  <input type="checkbox" className="" placeholder="" />{" "}
                </div>
              </div>
            </div>
          )}
          <div className="my-6 py-2 px-1 rounded-md cursor-pointer hover:bg-gray-50 flex justify-between items-center transition-all duration-100 ease-in-out">
            <div className="">My Orders</div>
            <div className="flex items-center justify-center w-[20px] h-[20px] text-[13px] bg-primary text-white rounded-full">
              0
            </div>
          </div>
          <div className="my-6 py-2 px-1 rounded-md cursor-pointer hover:bg-gray-50 flex justify-between items-center transition-all duration-100 ease-in-out">
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
