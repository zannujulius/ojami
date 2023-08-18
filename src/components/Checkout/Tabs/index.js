import { Button } from "../../Button";
import CartCard from "../../Cart/Card/CartCard";
import { MdArrowBackIosNew } from "react-icons/md";

const CheckoutTab = ({ settabState, tabState }) => {
  return (
    <div className="mt-4">
      <div className="">
        <div className="text-black text-[15px] font-semibold">
          Items in your cart
        </div>
        <div className="font-light text-[15px] text-black mt-1">
          Items that you currently have in your cart
        </div>
      </div>
      <div className="bg-lightgray rounded-md p-2 mt-6">
        {[1, 3, 4, 5].map((_, i) => (
          <CartCard key={i} />
        ))}
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center cursor-pointer">
            <div className="flex items-center justify-center">
              <MdArrowBackIosNew size={13} />
            </div>
            <div className="font-light px-3">Back</div>
          </div>
          <div className="">
            <Button
              text={"Proceed to delivery"}
              padding={"0 10px"}
              height={43}
              fontSize={"15px"}
              onClick={() => settabState(1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutTab;
