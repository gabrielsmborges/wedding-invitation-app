"use client";
import { FormEvent, useEffect, useState } from "react";
import { useStore } from "../store";
import { useIsAuth } from "../util/hooks";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ConfirmationPage() {
  useIsAuth();

  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* Confirm selection of users with tickboxes */}
      <h1 className="cormorant text-5xl text-center text-black my-10">
        Already Responded
      </h1>
      <p className="montserrat text-lg text-center text-black mt-10 mb-20 text-ludarkpurple">
        You have already responded to the invitation
      </p>
      <Link href="/confirmation-page?modify=true">
      <button className=" bg-ludarkpurple p-2 rounded-full text-[#fff] montserrat text-[14px] uppercase font-[500] w-[209px] h-[50px]">
          Change my response
      </button>
      </Link>
    </main>
  );
}
