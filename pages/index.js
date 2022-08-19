import SlidePic from "../components/SlidePic";
import Products from "../components/Products";
import BottomHome from "../components/bottomHome";
import FixedButton from "../components/FixedButton";

export default function Home() {
  return (
    <div>
      <SlidePic />
      <Products />
      <BottomHome />
      <FixedButton />
    </div>
  );
}
