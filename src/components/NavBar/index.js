import { RiArrowDownSLine } from "react-icons/ri";
import { BsHandbag } from "react-icons/bs";
import { Button } from "../Button";
import { themeColor } from "../../constant/color";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import Register from "../../screen/website/Auth/Register";
import Login from "../../screen/website/Auth/Login";

const NavBar = () => {
  const [openreg, setopenreg] = useState(false);
  const [openlogin, setopenlogin] = useState(false);
  return (
    <>
      {openreg && (
        <Register
          open={openreg}
          setopen={setopenreg}
          openlogin={openlogin}
          setopenlogin={setopenlogin}
        />
      )}
      {openlogin && (
        <Login
          open={openlogin}
          setopen={setopenlogin}
          openreg={openreg}
          setopenreg={setopenreg}
        />
      )}
      <div className="fixed top-0 w-full">
        <div className="h-[70px] flex items-center justify-between w-full sm:w-full md:w-[90%] lg:w-[90%] mx-auto">
          <div className="text-black text-[25px] md:text-[30px] font-semibold p-4 font-Titan">
            OjaMi.
          </div>
          <div className=" ml-40 hidden sm:hidden md:hidden lg:flex">
            <div className="flex mx-4 p-4 cursor-pointer">
              <div className="">Categories</div>
              <div className="flex items-center justify-center px-2">
                <RiArrowDownSLine />
              </div>
            </div>
            <div className="mx-4 p-4 cursor-pointer">My orders</div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center p-2 justify-center">
              <BsHandbag />
            </div>
            <div className="w-[100px] hidden sm:hidden md:flex lg:flex mx-4 ">
              <Button
                text={"Login"}
                bg={"#fff"}
                color={themeColor.black}
                onClick={() => setopenlogin(true)}
              />
            </div>
            <div className="w-[205px] hidden sm:hidden md:flex lg:flex ">
              <Button text={"Register"} onClick={() => setopenreg(true)} />
            </div>
            <div className="md:hidden lg:hidden p-3 ml-4 flex items-center justify-center cursor-pointer">
              <RxHamburgerMenu size={25} className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
