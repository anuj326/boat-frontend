import { Analytics } from "@vercel/analytics/react";
import Home from "./components/Home";

export default function App() {
// console.log('');

  return (
    <>
     <Analytics />
      <Home/>
    </>
  );
}
