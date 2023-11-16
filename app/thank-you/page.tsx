"use client";
import { useRouter } from "next/navigation";
import { useIsAuth } from "../util/hooks";

export default function ThankYou() {
    const isAuth = useIsAuth();
    const router = useRouter();
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1>Thank you for your response</h1>
            <button className="border-2 border-black" onClick={() => {
                router.push("/");
            }
            }>
                Go back home
            </button>
        </main>
    )
}

