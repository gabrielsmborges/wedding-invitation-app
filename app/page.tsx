"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useStore } from "./store";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Logo from "./components/icons/logo";
import Heart from "./components/icons/heart";
import Loading from "./components/Loading";

export default function Home() {
  // get query params
  const searchParams = useSearchParams();
  const [code, setCode] = useState("");
  const router = useRouter();

  const isInvalid = searchParams.get("invalid") === "true";

  const groupCode = useStore((state) => state.groupCode);
  const setGroupCode = useStore((state) => state.setGroupCode);
  const setUsers = useStore((state) => state.setUsers);
  const setLangugage = useStore((state) => state.setLanguage);

  const validateCode = useMutation({
    mutationFn: (code: string) => {
      return axios.post("/api/validate-code", {
        groupCode: code,
      });
    },
    onSuccess: (res) => {
      setGroupCode(code);
      setUsers(res.data);
      setLangugage(res.data[0].language);
      router.push("/welcome-page");
    },
    onError: (err) => {
      router.push("/?invalid=true");
    },
  });

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    validateCode.mutate(code);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-20 ">
      {validateCode.isPending ? (
        <Loading />
      ) : (
        <div className="flex justify-center flex-col w-[100%]">
          <div className="flex flex-col justify-center items-center gap-6">
            <Logo />
            <Heart />
          </div>
          <div className="h-40" />
          <form className="flex flex-col justify-center items-center gap-6 flex-1 w-[100%]">
            <input
              className={`
              border-[1px]
              border-ludarkpurple rounded-[15px] p-2 bg-lupurple1 w-[327px] text-center max-w-[80%] h-[50px] montserrat uppercase font-[500] placeholder:font-[300] placeholder:text-[14px] text-[16px] text-ludarkpurple placeholder-ludarkpurple`}
              type="text"
              inputMode="numeric"
              maxLength={4}
              placeholder="Enter Code / Digite o código"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            {
              isInvalid && (
                <p className="text-red-500 montserrat text-[14px]">
                  Invalid code / Código inválido
                </p>
              )
            }
            <button type="submit" onClick={handleSubmit} className={`
              bg-ludarkpurple
              montserrat
              text-[14px]
              uppercase
              font-[500]
              w-[209px]
              h-[50px]
              rounded-full
              text-[#fff]
            `}>
              Submit / Entrar
            </button>
          </form>
        </div>
      )}
    </main>
  );
}
