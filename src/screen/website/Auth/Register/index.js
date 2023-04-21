import { GoLocation } from "react-icons/go";
import Backdrop from "../../../../components/Backdrop";
import CloseButton from "../../../../components/CloseButton";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import GoogleLogo from "../../../../assets/svgs/googlelogo.svg";
import { useState } from "react";
import { Button } from "../../../../components/Button";
const Register = ({ open, setopen, openlogin, setopenlogin }) => {
  const [eye, seteye] = useState(false);
  const [loading, setloading] = useState(false);
  return (
    <Backdrop open={open} className="">
      <div className="w-[90%] sm:w-[90%] md:w-[400px] lg:w-[500px] bg-white rounded-md p-3 ">
        <div className="flex items-center justify-end">
          <CloseButton closeBtn={setopen} />
        </div>
        <div className="">
          <div className="text-[18px] font-semibold text-black text-center    ">
            Create an account
          </div>
          <div className="text-normal mt-3 text-center text-lightprimary">
            It is nice to have you here, you will get{" "}
            <span className="text-secondary">50% off </span> on your first
            order.
          </div>
          {/* form group */}
          <div className="w-[90%] mx-auto">
            {/* email */}
            <div className="">
              <div className="text-black text-[15px]">Email:</div>
              <div className="flex border-[1px] rounded-md px-2 p-2 h-[48px] mt-2">
                <input
                  className="w-[100%] h-full outline-none focus:border-none placeholder:text-lightprimary placeholder:text-[14px]"
                  type="text"
                  placeholder="Enter email address"
                />
              </div>
            </div>
            {/* password */}
            <div className="text-black text-[15px] mt-4">Password:</div>
            <div className="flex border-[1px] rounded-md px-2 p-2 h-[48px] mt-2">
              <input
                className="w-[100%] h-full outline-none focus:border-none placeholder:text-lightprimary placeholder:text-[14px]"
                type={eye ? "password" : "text"}
                placeholder="Your password"
              />
              <div
                className="flex items-center justify-center p-2 cursor-pointer"
                onClick={() => seteye(!eye)}
              >
                {!eye ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </div>
            </div>

            <div className="flex items-center justify-center my-6">
              <hr className="border-[0.5px] border-[#eee] w-[40%]" />
              <div className="font-semibold text-black px-2">Or</div>
              <hr className="border-[0.5px] border-[#eee] w-[40%]" />
            </div>
            <div className="border-[1px] flex items-center justify-center rounded-md h-[45px] cursor-pointer">
              <div className="flex items-center justify-center">
                <img src={GoogleLogo} alt="" className="w-[20px] h-[20px]" />
              </div>
              <div className="text-black px-2 text-lightprimary text-[15px]">
                Continue with Google
              </div>
            </div>
            <div className="w-full mt-6">
              <Button
                text={"Create account"}
                loading={loading}
                onClick={() => {
                  setloading(true);
                  setTimeout(() => {
                    setloading(false);
                  }, 2000);
                }}
              />
            </div>
          </div>

          <div className="text-center mt-6 text-lightprimary mb-[50px]">
            Already have an account?
            <span
              className="text-primary px-2 cursor-pointer underline"
              onClick={() => {
                setopen(false);
                setopenlogin(true);
              }}
            >
              Login
            </span>
          </div>
        </div>
      </div>
    </Backdrop>
  );
};

export default Register;
