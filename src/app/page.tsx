import Link from "next/link";
import globalstyles from "@/scss/gloabal.module.scss"
import RandomChar from "../components/randomChar";


export default function Home() {
  return (
    <div className={globalstyles.randomBg}>
      <div className={globalstyles.container}>
        <RandomChar />
      </div>
    </div>
  );
}
