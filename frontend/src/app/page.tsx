import Image from "next/image";
import Banner from "../components/Banner";
import SignIn from "./Auth/page";
import Dashboard from "./Dashboard/page";
import Setting from "@/app/Setting/page";

export default function Home() {
  return (
    <div>      
      {/* <SignIn/> */}
      <Dashboard/>
      
    </div>
  );
}
