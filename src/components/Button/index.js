import { css } from "@emotion/react";
import { MoonLoader } from "react-spinners";
import { themeColor } from "../../constant/color";

export const Button = ({
  bg,
  text,
  color,
  loading,
  loaderColor,
  loaderSize,
  onClick,
  height,
  border,
  btnStyles,
  width,
}) => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  // console.log(loading, "process");
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`w-full h-[40px] flex items-center justify-center cursor-pointer rounded  ${
        bg || "bg-primary"
      }`}
      style={{
        ...btnStyles,
        background: bg || themeColor.primary,
        width: "100%" || width,
        height: height || 45,
        borderRadius: "32px",
        border: border || "none",
      }}
    >
      {loading ? (
        <MoonLoader
          css={override}
          color={loaderColor || themeColor.white}
          size={loaderSize || 20}
          speedMultiplier={1}
        />
      ) : (
        <div
          className="font-normal"
          style={{
            color: color || themeColor.white,
          }}
        >
          {text}
        </div>
      )}
    </button>
  );
};
