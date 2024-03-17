import { useRouter } from "next/navigation";

import { useStore } from "../store";
import { useEffect } from "react";

export const useIsAuth = (wait?: boolean) => {
    const router = useRouter();
    const groupCode = useStore((state) => state.groupCode);

    useEffect(() => {
        if (wait) return;
        if (groupCode === "") {
            router.push("/");
        }
    }, [groupCode, wait]);

    return groupCode !== "";
};