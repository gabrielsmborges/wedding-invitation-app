"use client";

import { useSearchParams } from "next/navigation";
import { useStore } from "../store";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { useIsAuth } from "../util/hooks";

const Disclaimer = () => {
  const [wait, setWait] = useState(true);

  const searchParams = useSearchParams();

  const code = searchParams.get("code")
  const router = useRouter();

  const {
    setGroupCode,
    setUsers,
    setLanguage,
    groupCode,
  } = useStore();

  const validateCode = useMutation({
    mutationFn: (code: string) => {
      return axios.post("/api/validate-code", {
        groupCode: code,
      });
    },
    onSuccess: (res) => {
      setGroupCode(code as string);
      setUsers(res.data);
      setLanguage(res.data[0].language);
      setWait(false);
    },
    onError: (err) => {
      setWait(false);
      router.push("/?invalid=true");
    },
  });

  useEffect(() => {

    if (code) {
      validateCode.mutate(code);
    }

  }, [code]);

  const langugage = useStore((state) => state.language) || "EN";

  // useIsAuth() should wait to run until the language is set

  useIsAuth(wait);

    return (
      <>
      <Navbar />
      <div className="p-8 space-y-4 mt-10">
        <h3 className="text-ludarkpurple text-4xl my-5 leading-[58px] text-center">
          {/* Disclaimer */}
          {
            langugage === "PT" ? "Avisos" : "Disclaimer"
          }
        </h3>
  
        <div>
          <h4 className="font-bold uppercase text-xl text-ludarkpurple">
            {/* When should I confirm my presence? */}
            {
              langugage === "PT" ? "Quando devo confirmar minha presença?" : "When should I confirm my presence?"
            }
          </h4>
          <p className="montserrat text-sm">
            {/* You have until the <b>23rd of March</b> to confirm who can attend the
            event. */}
            {
              langugage === "PT" ? <>Você tem até o dia <b>23 de março</b> para confirmar quem pode comparecer ao evento.</> : <>You have until the <b>23rd of March</b> to confirm who can attend the event.</>
            }
          </p>
        </div>
        <div>
          <h4 className="font-bold uppercase text-xl text-ludarkpurple">
            {/* Can I bring an extra guest? */}
            {
              langugage === "PT" ? "Posso levar um convidado extra?" : "Can I bring an extra guest?"
            }
          </h4>
          <p className="montserrat text-sm">
            {/* No, please <b>do not try to bring extra guests</b> as they will be
            denied entry. */}
            {
              langugage === "PT" ? <>Não, por favor <b>não tente trazer convidados extras</b> pois eles serão impedidos de entrar.</> : <>No, please <b>do not try to bring extra guests</b> as they will be denied entry.</>
            }
          </p>
        </div>
        <div>
          <h4 className="font-bold uppercase text-xl text-ludarkpurple">
              {/* When does it start? */}
              {
                langugage === "PT" ? "Quando começa?" : "When does it start?"
              }
          </h4>
          <p className="montserrat text-sm">
              {/* The ceremony will start at <b>15h00</b>. Please arrive at the venue at least 30 minutes before the ceremony starts. */}
              {
                langugage === "PT" ? <>A cerimônia começará às <b>15h00</b>. Chegue ao local pelo menos 30 minutos antes do início da cerimônia.</> : <>The ceremony will start at <b>15h00</b>. Please arrive at the venue at least 30 minutes before the ceremony starts.</>
              }
          </p>
          <Link href="https://calndr.link/event/ZFcZgcUCWw" target="_blank">
              <button className="mt-5 p-2 px-4 rounded-full montserrat text-[12px] uppercase border-[1px] flex items-center gap-2 hover:bg-lupurple2 hover:text-[#fff]">
                {/* Add to my calendar */}
                <Calendar />
                {
                  langugage === "PT" ? "Adicionar ao meu calendário" : "Add to my calendar"
                }
                
              </button>
            </Link>
        </div>
        <div>
          <h4 className="font-bold uppercase text-xl text-ludarkpurple">
            {/* Is there parking space at the venue? */}
            {
              langugage === "PT" ? "Há estacionamento no local?" : "Is there parking space at the venue?"
            }
          </h4>
          <p className="montserrat text-sm">
            {/* Yes, you will be able to park at the venue. */}
            {
              langugage === "PT" ? "Sim, você poderá estacionar no local gratuitamente." : "Yes, you will be able to park at the venue for free."
            }
          </p>
        </div>
        <div>
          <h4 className="font-bold uppercase text-xl text-ludarkpurple">
            {/* What will be the weather? */}
            {
              langugage === "PT" ? "Como estará o clima?" : "What will be the weather?"
            }
          </h4>
          <p className="montserrat text-sm">
            {/* Expect temperatures between <b>15°C and 20°C</b>. The ceremony will be
            held outdoors and the reception indoors. So come ready for the
            weather. */}
            {
              langugage === "PT" ? <>Espere temperaturas entre <b>15°C e 20°C</b>. A cerimônia será realizada ao ar livre e a festa em ambiente fechado. Portanto, venha preparado para o clima.</> : <>Expect temperatures between <b>15°C and 20°C</b>. The ceremony will be held outdoors and the reception indoors. So come ready for the weather.</>
            }
          </p>
        </div>
        <div>
          <h4 className="font-bold uppercase text-xl text-ludarkpurple">
            {/* Can I take photos? */}
            {
              langugage === "PT" ? "Posso tirar fotos?" : "Can I take photos?"
            }
          </h4>
          <p className="montserrat text-sm">
            {/* Our photography team will be taking care of the photos, so we ask that
            you <b>do not take photos during the ceremony</b> and enjoy the moment
            with us (like in the old times).
            <br />
            During the reception, feel free to take photos and plese share them
            with us.
            <br />
            <br />
            Ceremony 🚫📷
            <br />
            Reception ✅📷 */}
            {
              langugage === "PT" ? <>Nossa equipe de fotografia cuidará das fotos, então pedimos que <b>não tire fotos durante a cerimônia</b> e aproveite o momento conosco (como nos velhos tempos).
              <br />
              Durante a festa, fique à vontade para tirar fotos e compartilhá-las conosco.
              <br />
              <br />
              Cerimônia 🚫📷
              <br />
              Festa ✅📷</> : <>Our photography team will be taking care of the photos, so we ask that you <b>do not take photos during the ceremony</b> and enjoy the moment with us (like in the old times).
              <br />
              During the reception, feel free to take photos and plese share them with us.
              <br />
              <br />
              Ceremony 🚫📷
              <br />
              Reception ✅📷</>
            }
          </p>
        </div>
  
        <div>
          <h4 className="font-bold uppercase text-xl text-ludarkpurple">
            {/* How do I get to the venue? */}
            {
              langugage === "PT" ? "Como chegar ao local?" : "How do I get to the venue?"
            }
          </h4>
          <p className="montserrat text-sm">
            {/* The venue is located <b>35min away from Porto</b> by car and 30min
            away from Porto Airport.
            <br />
            We recommend renting a car or taking an Uber/Taxi to get to the venue
            as there is <b>no reliable public transportation to the venue</b>. */}
            {
              langugage === "PT" ? <>O local fica a <b>35min do Porto</b> de carro e a 30min do Aeroporto do Porto.
              <br />
              Recomendamos alugar um carro ou pegar um Uber/Táxi para chegar ao local, pois <b>não há transporte público que garanta a chega ao local</b>.</> : <>The venue is located <b>35min away from Porto</b> by car and 30min away from Porto Airport.
              <br />
              We recommend renting a car or taking an Uber/Taxi to get to the venue as there is <b>no reliable public transportation to the venue</b>.</>
            }
          </p>
        </div>
        <div>
          <h4 className="font-bold uppercase text-xl text-ludarkpurple">
            {/* What about gifts 🎁? */}
            {
              langugage === "PT" ? "E quanto aos presentes 🎁?" : "What about gifts 🎁?"
            }
          </h4>
          <p className="montserrat text-sm">
            {/* Your presence is the best gift we could ask for. If you still want to
            gift us, we would prefer monetary gifts as transporting physical gifts
            would be impractical for us. */}
            {
              langugage === "PT" ? <>Sua presença é o melhor presente que poderíamos pedir. Se você ainda quiser nos presentear, preferiríamos presentes em dinheiro, pois transportar presentes físicos não seria prático para nós.</> : <>Your presence is the best gift we could ask for. If you still want to gift us, we would prefer monetary gifts as transporting physical gifts would be impractical for us.</>
            }
          </p>
  
          <div className="h-5" />
  
          <a
            href="https://linktr.ee/gabriel.luanne"
            target="_blank"
            rel="noreferrer"
          >
            <button className=" bg-lupurple2 p-2 rounded-full text-[#fff] montserrat text-[14px] uppercase font-[500] px-4">
              {/* Gift us 🎁 */}
              {
                langugage === "PT" ? "Presentes 🎁" : "Gift us 🎁"
              }
            </button>
          </a>
        </div>
        <div className="h-5" />
        <form className="flex flex-col" onSubmit={(e) => {
          e.preventDefault();
          router.push("/welcome-page");
        }}>
          <div className="mb-4">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              required
              className="mr-2"
              aria-required
            />
            <label htmlFor="agree" className="montserrat">
              {/* I understand and confirm that I will follow the guidelines */}
              {
                langugage === "PT" ? "Entendo e confirmo que seguirei as orientações" : "I understand and confirm that I will follow the guidelines"
              }
            </label>
          </div>
          <button
            type="submit"
            className=" bg-ludarkpurple p-2 rounded-full text-[#fff] montserrat text-[14px] uppercase font-[500] w-[209px] h-[50px]"
          >
            {/* Confirm */}
            {
              langugage === "PT" ? "Confirmar" : "Confirm"
            }
          </button>
        </form>
      </div>
      </>
    );
  };
  
  export default Disclaimer;
  