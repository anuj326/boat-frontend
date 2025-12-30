import { Analytics } from "@vercel/analytics/next";
import Home from "./components/Home";

export default function App() {

  return (
    <>
     <Analytics />
      <Home/>
    </>
  );
}
