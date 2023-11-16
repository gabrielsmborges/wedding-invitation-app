"use client";
import { useRouter } from "next/navigation";
import { useStore } from "../store";
import { useIsAuth } from "../util/hooks";

export default function WelcomePage() {
    const isAuth = useIsAuth();
    const router = useRouter();
    const users = useStore((state) => state.users);
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div>
            <h1>Welcome</h1>
            <ul>
                {
                    users.map((user) => {
                        return (
                            <li key={user.id}>
                                <b>{user.name}</b>
                            </li>
                        );
                    })
                }
            </ul>
            <p>Some information will go here (Design in progress...)</p>
            <button className="border-2 border-black" onClick={() => {
                router.push("/confirmation-page");
            }}>
                I'm going
            </button>
        </div>
        </main>
    );
}