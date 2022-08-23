import { useState, CSSProperties } from "react";
import ClockLoader from "react-spinners/ClockLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "blue",
};

export default function AnimatedLoader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("blue");

  return (
    <div className="flex  justify-center m-2 h-screen items-center">
      <div className="sweet-loading flex flex-col items-center">
        <ClockLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
        />
        <p>{"Please wait"}</p>
      </div>
    </div>
  );
}
