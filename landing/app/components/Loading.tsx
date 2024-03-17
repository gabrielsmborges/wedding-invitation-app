import Logo from "./icons/logo";
import Heart from "./icons/heart";
import { useStore } from "../store";

export default function Loading() {
    // center the loading component and the opacity should go from 0 to 1 infinitely
    const langugae = useStore((state) => state.language);
    return (
        <div className="flex flex-col items-center justify-center p-24">
            <div className="animate-pulse flex flex-col items-center justify-center gap-6">
                <Logo />
                <Heart />
                <p className="montserrat text-lg text-ludarkpurple">
                    {/* Loading */}
                    {
                        langugae === "PT" ? "Carregando" : "Loading"
                    }
                    </p>
            </div>
        </div>
    );
}