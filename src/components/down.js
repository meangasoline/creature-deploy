import Image from "next/image";
import { MdArrowDropDown } from "react-icons/md";

export default function Down({ MintMore }) {
  return (
    <button
      onClick={MintMore}
      style={{
        background: "none",
        border: "none",
        maxHeight: "40px",
        padding: "5px",
        display: "flex",
        alignItems: "center"
      }}
    >
      {MdArrowDropDown && <MdArrowDropDown size="6rem" />}
    </button>
  );
}
