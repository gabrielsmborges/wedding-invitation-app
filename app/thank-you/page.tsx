"use client";
import { useRouter } from "next/navigation";
import { useIsAuth } from "../util/hooks";
import Link from "next/link";
import Logo from "../components/icons/logo";
import Heart from "../components/icons/heart";

export default function ThankYou() {
  const isAuth = useIsAuth();
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-14">
      <h1 className="cormorant text-4xl text-center text-black my-10">
        Thanks for Answering
      </h1>
      <p className="montserrat text-lg text-center text-black my-10 text-ludarkpurple">
        Thank you for your response! Whether you've accepted or declined, we
        truly appreciate your consideration. <br/><br/>An email confirmation is on its way
        for those joining us, and for those who can't make it, we completely
        understand. No hard feelings – your warm wishes mean the world to us!
      </p>
      <Link href="/welcome-page">
        <button className=" bg-ludarkpurple p-2 rounded-full text-[#fff] montserrat text-[14px] uppercase font-[500] w-[209px] h-[50px]">
            Go back home
        </button>
      </Link>
      <div className="flex flex-col justify-center items-center gap-6 flex-1 w-[100%] mt-10">
        <Logo />
        <Heart />
      </div>
    </main>
  );
}
