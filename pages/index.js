import Image from "next/image";
import Mint from "../src/components/mint";
import Down from "../src/components/down";
import Up from "../src/components/up";
import CreatureGif from "../public/img/creature.gif";

export default function IndexPage() {
  const MintMore = () => {
    return;
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        height: "100vh",
        width: "100vw",
        padding: 0,
        margin: 0,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      className="app"
    >
      <div
        style={{
          height: "300px",
          width: "300px",
          boxShadow: "3px 3px 5px 6px #ccc"
        }}
      >
        <Image src={CreatureGif} />
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "9rem",
            width: "11rem"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <h1
              style={{
                fontSize: "8rem",
                padding: "0",
                margin: "0"
              }}
            >
              10
            </h1>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "0",
                margin: "0"
              }}
            >
              <Up MintMore={MintMore} />
              <Down MintLess={MintMore} />
            </div>
          </div>
          <Mint />
        </div>
      </div>
    </div>
  );
}
