"use client";
import { useRouter } from "next/navigation";
import { useStore } from "../store";
import { useIsAuth } from "../util/hooks";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Plane from "../components/icons/plane";
import Logo from "../components/icons/logo";
import Heart from "../components/icons/heart";
import { DateTime } from "luxon";
import { Frown, HeartCrack } from "lucide-react";

export default function WelcomePage() {
  const isAuth = useIsAuth();
  const router = useRouter();
  const users = useStore((state) => state.users);

  const didSomeoneRespond = users.some((user) => user.confirmed === true);
  const today = DateTime.now();
  const weddingDate = DateTime.fromISO("2024-04-27");
  const language = useStore((state) => state.language);

  const daysLeft = weddingDate.diff(today, "days").days;

  const code = useStore((state) => state.groupCode);

  if (!didSomeoneRespond) {
    return <NoAnswer />;
  }

  return (
    <main className="pt-14">
      <Navbar />
      <section id="welcome">
        <div className="p-[15px] gap-10 flex flex-col md:flex-row my-12 flex-1">
          <div className="p-[20px] flex-1">
            <h3
              className="montserrat tracking-[5px]
          "
            >
              {
                language === "PT" ? "Olá" : "Hello"
              }
            </h3>
            <h1 className="text-ludarkpurple text-5xl my-5 leading-[58px]">
              {users.map((user, index) => {
                // add a comma after each name except the last one
                if (index === users.length - 1) {
                  return `${user.name}`;
                } else {
                  return `${user.name}, `;
                }
              })}
            </h1>
            <p className="montserrat mb-5">
              {/* You are our guest for our wedding on the 27th of April 2024 */}
              {
                language === "PT" ? "Você é nosso convidado para o nosso casamento no dia 27 de Abril de 2024" : "You are our guest for our wedding on the 27th of April 2024"
              }
            </p>
          </div>
          <Image
            src="/welcome.png"
            width={1452}
            height={1133}
            className="flex-1"
            alt=""
          />
        </div>
      </section>
      <section id="where" className="bg-lupurple2">
        <div className="flex flex-col md:flex-row-reverse my-12 md:mx-12">
          <div className="p-[35px] pb-0 flex-1 pt-18">
            <h3
              className="montserrat tracking-[5px]
          "
            >
              {
                language === "PT" ? "Onde" : "Where"
              }
            </h3>
            <h1 className="text-ludarkpurple text-5xl my-5 leading-[58px]">
              Quinta do Pinheiro
            </h1>
            <p className="montserrat">
              Hotel de Charme Quinta do Pinheiro R. de Miraldo 262, 4590-390
            </p>
            <p className="montserrat">Freamunde, Portugal</p>
            <p className="montserrat flex items-center">
              <Plane />
              &nbsp;
              {/* Closest Airport - Porto Airport (OPO) */}
              {
                language === "PT" ? "Aeroporto mais próximo - Aeroporto do Porto (OPO)" : "Closest Airport - Porto Airport (OPO)"
              }
            </p>
            <Link href="https://www.hotelquintadopinheiro.com/" target="_blank">
              <button className="mt-5 p-2 px-6 rounded-full montserrat text-[14px] uppercase h-[50px] border-[1px]">
                {/* More details */}
                {
                  language === "PT" ? "Mais detalhes" : "More details"
                }
              </button>
            </Link>
          </div>
          <Image
            src="/where-rounded.png"
            className="hidden md:block my-12 flex-1"
            width={1179}
            height={954}
            alt=""
          />
          <Image
            src="/where.png"
            // hidden on desktop
            className="md:hidden flex-1"
            width={1179}
            height={954}
            alt=""
          />
        </div>
      </section>
      <section id="when">
        <div className="p-[15px] gap-10 flex flex-col md:flex-row my-12 flex-1">
          <div className="p-[20px] flex-1 pb-0">
            <h3
              className="montserrat tracking-[5px]
          "
            >
              {/* When */}
              {
                language === "PT" ? "Quando" : "When"
              }
            </h3>
            <h1 className="text-ludarkpurple text-5xl my-5 leading-[58px]">
              {/*  */}
              {
                language === "PT" ? <>
                  Sábado <br />
                  27 de Abril de 2024
                </> : <>Saturday <br />
              27<span className="text-sm z-0">th</span> of April 2024</>
              }
            </h1>
            <p className="montserrat mb-5">
              {
                language === "PT" ? "Começo da cerimônia:" : "Ceremony starts at:"
              }
              <p className="text-2xl font-bold">
                {
                  language === "PT" ? "15:00" : "3:00 PM"
                }
              </p>
            </p>
            {/* https://calndr.link/events/ZFcZgcUCWw?secret=5FKdeYcmlr0nCmRCzWfEeWSJIOdxvHWiFE9w */}
            <Link href="https://calndr.link/event/ZFcZgcUCWw" target="_blank">
              <button className="mt-5 p-2 px-6 rounded-full montserrat text-[14px] uppercase h-[50px] border-[1px]">
                {/* Add to my calendar */}
                {
                  language === "PT" ? "Adicionar ao meu calendário" : "Add to my calendar"
                }
              </button>
            </Link>
          </div>
          <Image
            src="/when.png"
            width={1066}
            height={931}
            className="flex-1"
            alt=""
          />
        </div>
      </section>
      <section id="donations">
        <div className="p-[15px] gap-10 flex flex-col md:flex-row py-12 flex-1 bg-lupurple2">
          <div className="p-[20px] flex-1 py-14">
            <h3
              className="montserrat tracking-[5px]
          "
            >
              {/* Donations */}
              {
                language === "PT" ? "Presentes" : "Donations"
              }
            </h3>
            <h1 className="text-ludarkpurple text-5xl my-5 leading-[58px]">
              {/* Gift Space! */}{
                language === "PT" ? "Espaço para presentes!" : "Gift Space!"
              }
            </h1>
            <p className="montserrat mb-5 text-center">
              {/* Your presence at our wedding is the greatest gift of all! However,
              should you wish to help us celebrate with a gift, feel free to
              click in one of the link below: */}
              {
                language === "PT" ? "Sua presença no nosso casamento é o maior presente de todos! No entanto, se você deseja nos ajudar a comemorar com um presente, sinta-se à vontade para clicar em um dos links abaixo:" : "Your presence at our wedding is the greatest gift of all! However, should you wish to help us celebrate with a gift, feel free to click in one of the link below:"
              }
            </p>
            <div className="flex flex-col justify-center items-center">
              <Link href="https://revolut.me/gabrielborges" target="_blank">
                <button className="mt-5 p-2 px-6 rounded-full montserrat text-[14px] uppercase h-[50px] border-[1px] border-ludarkpurple text-ludarkpurple w-[200px]">
                  € Euro
                </button>
              </Link>
              <Link
                href="https://settleup.starlingbank.com/luannesantanagabrielsilvamirandaborges?message=Gabriel%20%26%20Luanne%20Wedding%20%F0%9F%92%8D"
                target="_blank"
              >
                <button className="mt-5 p-2 px-6 rounded-full montserrat text-[14px] uppercase h-[50px] border-[1px] border-ludarkpurple text-ludarkpurple w-[200px]">
                  £ Pound
                </button>
              </Link>
              <Link
                href="https://nubank.com.br/cobrar/12rlj6/655c13f6-e22f-4ba2-a464-08acd06d45a3"
                target="_blank"
              >
                <button className="mt-5 p-2 px-6 rounded-full montserrat text-[14px] uppercase h-[50px] border-[1px] border-ludarkpurple text-ludarkpurple w-[200px]">
                  R$ Reais
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        id="countdown"
        className="flex flex-col items-center justify-center py-14"
      >
        <p className="montserrat text-[20px] text-center text-ludarkpurple mb-5">
          {/* Hope to see you in */}
          {
            language === "PT" ? "Esperamos vê-lo em" : "Hope to see you in"
          }
          <br />
          <b>{Math.max(Math.floor(daysLeft), 0) || 0}</b>{
            language === "PT" ? " dias" : " days"
          }
        </p>
        <Image src="/countdown.png" width={433 / ratio} height={433} alt="" />
        <div className="mt-14" />
        <div className="flex flex-col items-center justify-center gap-6 mt-14">
          <Logo width={191} />
          <Heart />
        </div>
      </section>
    </main>
  );
}


const NoAnswer = () => {
  const language = useStore((state) => state.language);
  const users = useStore((state) => state.users);
  return (
    <section id="welcome">
        <div className="p-[15px] gap-10 flex flex-col md:flex-row my-12 flex-1 justify-center">
          <div className="p-[20px] text-center">

            <h3 className="montserrat tracking-[5px]">
              {
                language === "PT" ? "Olá" : "Hello"
              }
            </h3>
            <h1 className="text-ludarkpurple text-5xl my-5 leading-[58px]">
              {users.map((user, index) => {
                // add a comma after each name except the last one
                if (index === users.length - 1) {
                  return `${user.name}`;
                } else {
                  return `${user.name}, `;
                }
              })}
            </h1>
            <p className="montserrat mb-5 w-[80%] max-w-[900px] mx-auto">
              {/* You are our guest for our wedding on the 27th of April 2024 */}
              {
                language === "PT" ? "Infelizmente, a nossa lista de convidados foi fechada no dia 24 de Março. Se você acha que isso é um erro, por favor entre em contato conosco." : "Unfortunately, our guest list was closed on March 24th. If you think this is a mistake, please contact us."
              }
            </p>
            <Frown size={50} className="mx-auto"/>
            <div className="mt-5"/>
            <a
            href="https://linktr.ee/gabriel.luanne"
            target="_blank"
            rel="noreferrer"
          >
            <button className=" bg-lupurple2 p-2 rounded-full text-[#fff] montserrat text-[14px] uppercase font-[500] px-4">
              {/* Gift us 🎁 */}
              {
                language === "PT" ? "Presentes 🎁" : "Gift us 🎁"
              }
            </button>
          </a>
          </div>
        </div>
      </section>
  );
}

const ratio = 1107 / 1433;
