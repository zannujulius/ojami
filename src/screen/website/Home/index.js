import { Button } from "../../../components/Button";
import NavBar from "../../../components/NavBar";
import HeroImg from "../../../assets/png/hero.png";
import HeroOne from "../../../assets/png/hero1.png";
import Layout from "../../../components/Layout";
import { useState } from "react";
import Address from "../../../components/Address";

const Home = () => {
  const [openaddress, setopenaddress] = useState(false);
  return (
    <>
      {openaddress && <Address open={openaddress} setopen={setopenaddress} />}
      <Layout className="">
        <div className="md:grid lg:grid grid-cols-2 w-[90%] hidden sm:hidden mx-auto h-screen">
          <div className="flex items-center justify-center flex-col ">
            <div className="text-[65px] font-semibold leading-[70px]">
              Online store for fresh and affordable veggies
            </div>
            <div className="text-[25px] text-black mt-6 font-light">
              Fresh from the farm to your doorstep, providing the best
              vegetables.
            </div>
            <div className="w-full mt-8">
              <div className="w-[200px]">
                <Button text={"Start shopping"} />
              </div>
            </div>
          </div>
          <div className="h-full flex items-center justify-center w-full">
            <div className="w-[400px] h-full ">
              <img src={HeroImg} className="" />
            </div>
          </div>
        </div>
        <div className="w-full md:hidden lg:hidden">
          <div className="">
            <img src={HeroOne} className="w-full " />
          </div>
          <div className="">
            <div className="text-[30px] font-bold pt-2 text-center">
              Online store for fresh and affordable veggies
            </div>
            <div className="text-[20px] text-center text-black mt-6 font-light">
              Fresh from the farm to your doorstep, providing the best
              vegetables.
            </div>
            <div className="w-full flex items-center justify-center mt-8">
              <div className="w-[200px]">
                <Button
                  text={"Start shopping"}
                  onClick={() => setopenaddress(true)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pb-[100px]"></div>
      </Layout>
    </>
  );
};

export default Home;
