import { themeColor } from "../../../constant/color";
import { Button } from "../../Button";
import ShoppingImg from "../../../assets/svgs/shoppingimg.svg";

const ShoppingCard = () => {
  return (
    <div className="border overflow-hidden rounded-md">
      <div
        className="  h-[230px] w-full"
        style={{
          background: `url(${ShoppingImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <img src={} className="h-[200px] w-full" /> */}
      </div>
      <div className="flex items-start justify-between p-3">
        <div className="">
          <div className="tex-black font-semibold">Tomatoes</div>
          <div className="text-[14px] text-lightprimary">NGN1,000</div>
        </div>
        <div className="">
          <div className="">
            <Button
              color={"#111"}
              text={"Add to Cart"}
              bg={"#fff"}
              height={35}
              fontSize={13}
              padding={"10px"}
              border={"1px solid #bbb"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
