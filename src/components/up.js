import Image from "next/image";
import { MdArrowDropUp } from "react-icons/md";

export default function Up({ MintMore }) {
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
      {MdArrowDropUp && <MdArrowDropUp size="6rem" />}
    </button>
  );
}
