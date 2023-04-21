import Backdrop from "../../Backdrop";
import { css } from "@emotion/react";
import { BarLoader } from "react-spinners";

const ProcessingCard = ({ open }) => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  return (
    <Backdrop open={open}>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="flex w-[200] px-3 pb-3 pt-5 bg-white rounded-md drop-shadow-md h-[auto] flex-col items-center justify-center">
          <BarLoader color="#000" size={10} speedMultiplier={2} />
          <div className="pt-2 text-gray-700">Processing...</div>
        </div>
      </div>
    </Backdrop>
  );
};

export default ProcessingCard;
