import { useRouter } from "next/navigation";

import { useStore } from "../store";
import { useEffect } from "react";

export const useIsAuth = () => {
    const router = useRouter();
    const groupCode = useStore((state) => state.groupCode);

    useEffect(() => {
        if (groupCode === "") {
            router.push("/");
        }
    }, [groupCode]);

    return groupCode !== "";
};