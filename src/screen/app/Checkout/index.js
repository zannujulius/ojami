import Layout from "../../../components/Layout";
import { IoIosArrowBack } from "react-icons/io";

const Checkout = () => {
  return (
    <Layout>
      <div className="mt-[70px]">
        <div className="">
          <div className="flex cursor-pointer">
            <div className="flex items-center justify-center">
              <IoIosArrowBack />
            </div>
            <div className="font-semibold text-black px-2">
              Back to shopping
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
