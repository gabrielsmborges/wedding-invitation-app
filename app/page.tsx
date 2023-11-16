"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useStore } from "./store";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function Home() {
  // get query params
  const searchParams = useSearchParams();
  const [code, setCode] = useState("");
  const router = useRouter();

  const isInvalid = searchParams.get("invalid") === "true";

  const groupCode = useStore((state) => state.groupCode);
  const setGroupCode = useStore((state) => state.setGroupCode);
  const setUsers = useStore((state) => state.setUsers);

  const validateCode = useMutation({
    mutationFn: (code: string) => {
      return axios.post("/api/validate-code", {
        groupCode: code,
      });
    },
    onSuccess: (res) => {
      setGroupCode(code);
      setUsers(res.data);
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
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {validateCode.isPending ? (
        <div>
          <h1>Loading</h1>
        </div>
      ) : (
        <div>
          <h1>Hi friend what is your code?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="border-2 border-black"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <p>{isInvalid ? "Invalid code" : ""}</p>
            <button type="submit" className="border-2 border-black">
              Submit
            </button>
          </form>
        </div>
      )}
    </main>
  );
}
