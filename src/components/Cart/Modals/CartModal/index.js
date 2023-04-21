import { GoLocation } from "react-icons/go";
import Backdrop from "../../../../components/Backdrop";
import CloseButton from "../../../../components/CloseButton";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import GoogleLogo from "../../../../assets/svgs/googlelogo.svg";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/Button";
import NoCartImg from "../../../../assets/png/nocart.png";
import Skimmer from "../../../Loader/Skimmer";
import CartCard from "../../Card/CartCard";

const CartModal = ({ open, setopen, data = [] }) => {
  const [eye, seteye] = useState(false);
  const [loading, setloading] = useState(false);
  const [loadingcart, setloadingcart] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloadingcart(false);
    }, 2000);
    return () => {};
  }, []);

  return (
    <Backdrop open={open} className="">
      <div className="w-[90%] sm:w-[90%] md:w-[400px] lg:w-[500px] bg-white rounded-md p-3 ">
        <div className="w-[90%] mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-black font-semibold">My Cart</div>
            <CloseButton closeBtn={setopen} />
          </div>
          <div className="">
            {loadingcart ? (
              Array.from(Array(6)).map((i, index) => (
                <div className="my-3">
                  <Skimmer heigth={30} key={index} />
                </div>
              ))
            ) : !data.length ? (
              <div className="border-[1px] border-dashed rounded-md h-[300px] flex flex-col items-center justify-center my-6">
                <img src={NoCartImg} className="w-[60px] h-[60px]" />
                <div className="text-black font-semibold">
                  You don't any item in your cart
                </div>
              </div>
            ) : (
              <div className="">
                <div className="">
                  {data.map((_) => (
                    <CartCard />
                  ))}
                </div>
                <div className="w-full mt-6">
                  <Button
                    text={"Checkout"}
                    loading={loading}
                    onClick={() => {
                      setloading(true);
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Backdrop>
  );
};

export default CartModal;
