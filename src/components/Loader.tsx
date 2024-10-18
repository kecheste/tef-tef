import { RotatingLines } from "react-loader-spinner";

export default function Loader() {
  return (
    <RotatingLines
      strokeColor="blue"
      strokeWidth="3"
      animationDuration="0.2"
      width="50"
      visible={true}
    />
  );
}
