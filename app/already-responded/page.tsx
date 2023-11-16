"use client";
import { FormEvent, useEffect, useState } from "react";
import { useStore } from "../store";
import { useIsAuth } from "../util/hooks";
import { useRouter } from "next/navigation";

export default function ConfirmationPage() {
  useIsAuth();

  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* Confirm selection of users with tickboxes */}
      <h1>Already responded</h1>
      <p>You have already responded to the invitation</p>

      <button
        className="border-2 border-black"
        onClick={() => {
          router.push("/confirmation-page?modify=true");
        }}
      >
        Change my response
      </button>
    </main>
  );
}
