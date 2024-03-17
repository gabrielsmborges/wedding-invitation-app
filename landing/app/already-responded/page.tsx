"use client";
import { FormEvent, useEffect, useState } from "react";
import { useStore } from "../store";
import { useIsAuth } from "../util/hooks";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ConfirmationPage() {
  useIsAuth();

  const router = useRouter();
  const language = useStore((state) => state.language);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* Confirm selection of users with tickboxes */}
      <h1 className="cormorant text-5xl text-center text-black my-10">
        {/* Already Responded */}
        {
          language === "PT" ? "Você já respondeu" : "Already Responded"
        }
      </h1>
      <p className="montserrat text-lg text-center text-black mt-10 mb-20 text-ludarkpurple">
        {/* You have already responded to the invitation */}
        {
          language === "PT" ? "Você já respondeu ao convite" : "You have already responded to the invitation"
        }
      </p>
      <Link href="/confirmation-page?modify=true">
      <button className=" bg-ludarkpurple p-2 rounded-full text-[#fff] montserrat text-[14px] uppercase font-[500] w-[209px] h-[50px]">
          {/* Change my response */}
          {
            language === "PT" ? "Mudar minha resposta" : "Change my response"
          }
      </button>
      </Link>
      <Link href="/welcome-page" className="mt-10 underline">
        {
          language === "PT" ? "Voltar para a página inicial" : "Back to home page"
        }
      </Link>
    </main>
  );
}
