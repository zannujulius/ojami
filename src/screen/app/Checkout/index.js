import Layout from "../../../components/Layout";
import { IoIosArrowBack } from "react-icons/io";
import Rule from "../../../components/Rule/Index";
import CheckoutTab from "../../../components/Checkout/Tabs";

const Checkout = () => {
  return (
    <Layout>
      <div className="mt-[90px]">
        <div className="">
          <div className="flex cursor-pointer mt-6">
            <div className="flex items-center justify-center">
              <IoIosArrowBack />
            </div>
            <div className="font-normal text-black px-2">Back to shopping</div>
          </div>
          <div className="grid grid-cols-2 gap-10 mt-6">
            <div className="">
              <div className="flex justify-between">
                <div className="">
                  <div className="flex items-center justify-center">
                    <div className="border-[1px] border-secondary w-fit rounded-full p-[2px]">
                      <div className="rounded-full w-[12px] h-[12px] bg-secondary"></div>
                    </div>
                  </div>
                  <div className="font-light text-[14px] text-black">
                    Check-out
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-center">
                    <div className="border-[1px] border-secondary w-fit rounded-full p-[2px]">
                      <div className="rounded-full w-[12px] h-[12px] bg-secondary"></div>
                    </div>
                  </div>
                  <div className="font-light text-[14px] text-black">
                    Delivery
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-center">
                    <div className="border-[1px] border-secondary w-fit rounded-full p-[2px]">
                      <div className="rounded-full w-[12px] h-[12px] bg-secondary"></div>
                    </div>
                  </div>
                  <div className="font-light text-[14px] text-black">
                    Payment
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-center">
                    <div className="border-[1px] border-secondary w-fit rounded-full p-[2px]">
                      <div className="rounded-full w-[12px] h-[12px] bg-secondary"></div>
                    </div>
                  </div>
                  <div className="font-light text-[14px] text-black">
                    Confirmation
                  </div>
                </div>
              </div>
              {/* tabs */}
              <div className="mt-12">
                <CheckoutTab />
              </div>
            </div>
            <div className="bg-lightgray rounded-md px-6 py-6">
              <div className="bg-secondary text-center mb-4 text-[15px] rounded-md text-white p-2">
                You’ve got 50% off as a new subscriber <span></span>
              </div>
              <Rule />
              <div className="mt-4">
                <div className="font-semibold text-black">Order summary</div>
                <div className="">
                  <div className="flex justify-between items-center my-4">
                    <div className="font-light">Package Tomatoes</div>
                    <div className="font-light text-lightprimary">N1,500</div>
                  </div>
                  <div className="flex justify-between items-center my-4">
                    <div className="font-light">Package Tomatoes</div>
                    <div className="font-light text-lightprimary">N1,500</div>
                  </div>
                </div>
                <div className="font-semibold text-black">Delivery summary</div>
                <div className="flex justify-between items-center my-4">
                  <div className="font-light">Package Tomatoes</div>
                  <div className="font-light text-lightprimary">N1,500</div>
                </div>
                <Rule />
                <div className="flex justify-between items-center my-4">
                  <div className="font-light">Total Amount</div>
                  <div className="">
                    <div className="font-normal text-[#bbb] line-through">
                      N1,500
                    </div>
                    <div className="font-semibold text-lightprimary">
                      N1,500
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
