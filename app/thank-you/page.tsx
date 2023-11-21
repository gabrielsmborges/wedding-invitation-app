"use client";
import { useRouter } from "next/navigation";
import { useIsAuth } from "../util/hooks";
import Link from "next/link";
import Logo from "../components/icons/logo";
import Heart from "../components/icons/heart";
import { useStore } from "../store";

export default function ThankYou() {
  const isAuth = useIsAuth();
  const router = useRouter();
  const language = useStore((state) => state.language);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-14">
      <h1 className="cormorant text-4xl text-center text-black my-10">
        {/* Thanks for Answering */}
        {
          language === "PT" ? "Obrigado por responder" : "Thanks for Answering"
        }
      </h1>
      <p className="montserrat text-lg text-center text-black my-10 text-ludarkpurple">
        {/* Thank you for your response! Whether you've accepted or declined, we
        truly appreciate your consideration. <br/><br/>An email confirmation is on its way
        for those joining us, and for those who can't make it, we completely
        understand. No hard feelings – your warm wishes mean the world to us! */}
        {
          language === "PT" ? <>Obrigado pela sua resposta! Se você aceitou ou recusou, nós realmente apreciamos sua consideração. <br/><br/>Um e-mail de confirmação será enviado para aqueles que estarão presentes, e para aqueles que não podem comparecer, nós entendemos completamente. Sem ressentimentos - a sua oração por nós já é o suficiente!</> : <>Thank you for your response! Whether you've accepted or declined, we truly appreciate your consideration. <br/><br/>An email confirmation is on its way for those joining us, and for those who can't make it, we completely understand. No hard feelings – your warm wishes mean the world to us!</>
        }
      </p>
      <p className="montserrat text-lg text-center text-black my-10 text-ludarkpurple font-bold">
        {
          language === "PT" ? "Verifique sua caixa de spam se você não receber o e-mail de confirmação." : "Check your spam/junk folder if you don't receive the confirmation email."
        }
      </p>
      <Link href="/welcome-page">
        <button className=" bg-ludarkpurple p-2 rounded-full text-[#fff] montserrat text-[14px] uppercase font-[500] w-[209px] h-[50px]">
            {/* Go back home */}
            {
              language === "PT" ? "Voltar para o inicio" : "Go back home"
            }
        </button>
      </Link>
      <div className="flex flex-col justify-center items-center gap-6 flex-1 w-[100%] mt-10">
        <Logo />
        <Heart />
      </div>
    </main>
  );
}
