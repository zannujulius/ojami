import { HiOutlinePlus, HiOutlineMinusSm } from "react-icons/hi";
import CartImg from "../../../../assets/svgs/cartsample.svg";
import { MdDeleteOutline } from "react-icons/md";
const CartCard = () => {
  return (
    <div className="flex items-center justify-between my-4">
      <div className="flex">
        <div className="  w-[90px]">
          <img src={CartImg} className="" />
        </div>
        <div className="ml-2">
          <div className="font-semibold text-black">Onions</div>
          <div className="text-lightprimary font-semibold text-black">
            ₦1,000
          </div>
        </div>
      </div>
      <div className="flex  items-center ">
        <div className="text-lightprimary flex items-center justify-center w-[30px] mr-6 cursor-pointer ">
          <HiOutlinePlus />
        </div>
        <div className="text-lightprimary">
          <input
            placeholder="0"
            className=" border-[1px] h-[40px] text-center rounded-md border-gray-200 focus:border-none placeholder:text-lightprimary text-[13px] placeholder:text-[13px] w-[40px]"
          />
        </div>
        <div className="text-lightprimary flex items-center justify-center w-[30px] ml-6 cursor-pointer">
          <HiOutlineMinusSm />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center justify-center">
          <MdDeleteOutline />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
