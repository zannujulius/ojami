import { useState, useEffect } from "react";
import CloseButton from "../../../components/CloseButton";
import Layout from "../../../components/Layout";
import { IoPricetagOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import Rule from "../../../components/Rule/Index";
import ShoppingCard from "../../../components/Shopping/Cards/ShoppingCard";
import Skimmer from "../../../components/Loader/Skimmer";

const Shopping = () => {
  const [opendiscount, setopendiscount] = useState(false);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3000);
    return () => {};
  }, []);

  return (
    <Layout>
      <div className="mt-6">
        <div className="flex mt-20 h-[50px] rounded-md bg-secondary justify-between items-center">
          <div className="hidden sm:hidden md:block"></div>
          <div className="flex justify-center items-center">
            <div className="justify-center items-center hidden sm:hidden md:flex">
              <IoPricetagOutline color="#fff" />
            </div>
            <div className="text-white px-4 text-[14px] md:text-[16px]">
              Free delivery on items above N14,999{" "}
            </div>
          </div>
          <div className="flex justify-center items-center px-3 pb-2">
            <CloseButton closeBtn={setopendiscount} color={"#fff"} />
          </div>
        </div>
        <div className="border-[1px] flex items-center justify-between border-[#eee] w-full sm:w-full md:w-[300px] lg:w-[300px] rounded-md h-[45px] p-2 my-4">
          <input
            type="search"
            placeholder="Search for products"
            className="outline-none text-black  focus:border-none w-[80%] placeholder:text-lightprimary placeholder:text-[14px]"
          />
          <div className="flex justify-center items-center">
            <FiSearch />
          </div>
        </div>
        <Rule />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading
            ? Array.from(Array(10)).map((_, index) => (
                <div className="border overflow-hidden rounded-md">
                  <div className=" h-[200px] w-full">
                    <Skimmer heigth={"100%"} />
                  </div>
                  <div className="flex items-start justify-between p-3">
                    <div className="">
                      <Skimmer width={"120px"} />
                      <div className="my-1">
                        <Skimmer width={"80px"} />
                      </div>
                    </div>
                    <div className="">
                      <Skimmer width={"120px"} />
                    </div>
                  </div>
                </div>
              ))
            : Array.from(Array(4)).map((_, index) => <ShoppingCard />)}
        </div>
        <div className="h s-[100px]"></div>
      </div>
    </Layout>
  );
};

export default Shopping;
