"use client";
import { FormEvent, useEffect, useState } from "react";
import { useStore } from "../store";
import { useIsAuth } from "../util/hooks";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Tick from "../components/icons/tick";
import Email from "../components/icons/email";
import Phone from "../components/icons/phone";

export default function ConfirmationPage() {
  const isAuth = useIsAuth();

  const router = useRouter();
  const searchParams = useSearchParams();

  const isModification = searchParams.get("modify") === "true";

  const users = useStore((state) => state.users);
  const language = useStore((state) => state.language);
  const [selectedUsers, setSelectedUsers] = useState<typeof users>([]);
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const groupCode = useStore((state) => state.groupCode);

  const confirmedData = useQuery({
    queryKey: ["confirmation-one", groupCode],
    queryFn: () => {
      return axios.get(`/api/confirmation-one/${groupCode}`);
    },
  });

  const confirmGoing = useMutation({
    mutationFn: () => {
      const selectedUsersIds = selectedUsers.map(
        (selectedUser) => selectedUser.id
      );
      return axios.post(`/api/confirmation-one/${groupCode}`, {
        guestsGoingIds: selectedUsersIds,
        guestsGoingNames: selectedUsers.map((user) => user.name),
        email,
        phone,
      });
    },
    onSuccess: () => {
      router.push("/thank-you");
    },
  });

  useEffect(() => {
    if (!confirmedData.data?.data) {
      return;
    }

    const overallStatus = confirmedData.data.data.overallStatus;

    if (overallStatus === "Done" && !isModification) {
      router.push("/already-responded");
    }
  }, [confirmedData.data]);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (selectedUsers.length === 0) {
      confirm(
        "You have not selected any guests, are you sure you want to continue?"
      );
    }
    confirmGoing.mutate();
  };

  return (
    <main className="flex min-h-screen flex-col">
      {confirmedData.isLoading || confirmGoing.isPending ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <form className="p-10 mt-[100px]" onSubmit={submitHandler}>
            <h1 className="cormorant text-5xl text-center text-black my-10">
              {/* Confirm Presence */}{
                language === "PT" ? "Confirmar presença" : "Confirm presence"
              }
            </h1>
            <p className="text-ludarkpurple text-center montserrat mb-5">
              {/* Confirm who can attend the wedding */}
              {
                language === "PT" ? "Confirme quem pode comparecer ao casamento" : "Confirm who can attend the wedding"
              }
            </p>
            <p className="montserrat text-[14px] text-center">
              {/* You have until the <b>5th of January 2024</b> to confirm who can
              attend the event */}
              {
                language === "PT" ? <>Você tem até o dia <b>5 de Janeiro de 2024</b> para confirmar quem pode comparecer ao evento</> : <>You have until the <b>5th of January 2024</b> to confirm who can attend the event</>
              }
            </p>

            <p className="text-ludarkpurple text-center montserrat mb-5 mt-10 font-bold">
              {
                language === "PT" ? "Clique nos nomes para selecionar" : "Click on the names to select"
              }
            </p>

            <div className="flex flex-col gap-2 max-w-[300px] mx-auto mt-10">
              {users.map((user) => (
                <ConfirmationName
                  name={user.name}
                  confirmed={
                    selectedUsers.findIndex(
                      (selectedUser) => selectedUser.id === user.id
                    ) !== -1
                  }
                  onClick={() => {
                    const index = selectedUsers.findIndex(
                      (selectedUser) => selectedUser.id === user.id
                    );
                    if (index === -1) {
                      setSelectedUsers([...selectedUsers, user]);
                    } else {
                      setSelectedUsers(
                        selectedUsers.filter(
                          (selectedUser) => selectedUser.id !== user.id
                        )
                      );
                    }
                  }}
                />
              ))}
            </div>
            <p className="montserrat text-[14px] text-center italic mt-10">
              {/* Your invitation will be considered as{" "}
              <b className="text-red-400">rejected</b> if we don’t get your
              response by the <b>5th of January 2024</b> */}
              {
                language === "PT" ? <>Seu convite será considerado como <b className="text-red-400">rejeitado</b> se não recebermos sua resposta até o dia <b>5 de Janeiro de 2024</b></> : <>Your invitation will be considered as{" "}
              <b className="text-red-400">rejected</b> if we don’t get your
              response by the <b>5th of January 2024</b></>
              }
            </p>
            <p className="text-ludarkpurple montserrat my-10 md:text-center">
              {/* Please add contact details for the event organiser... */}
              {
                language === "PT" ? "Por favor adicione detalhes de contato para o organizador do evento..." : "Please add contact details for the event organiser..."
              }
            </p>
            <div className="flex max-w-[300px] border-[1px] border-grey rounded-xl mx-auto h-[50px] items-center">
              <div className="flex items-center justify-center w-[55px] h-[50px] rounded-full">
                <Email />
              </div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                placeholder="EMAIL"
                className="flex-1 montserrat text-[16px] text-ludarkpurple bg-transparent outline-none"
              />
            </div>
            <div className="flex max-w-[300px] border-[1px] border-grey rounded-xl mx-auto h-[50px] items-center mt-5">
              <div className="flex items-center justify-center w-[55px] h-[50px] rounded-full">
                <Phone />
              </div>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                type="tel"
                placeholder={
                  language === "PT" ? "TELEFONE" : "PHONE"
                }
                inputMode="tel"
                className="flex-1 montserrat text-[16px] text-ludarkpurple bg-transparent outline-none"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className=" bg-ludarkpurple p-2 rounded-full text-[#fff] montserrat text-[14px] uppercase font-[500] w-[209px] h-[50px] mt-5"
              >
                {/* Submit */}
                {
                  language === "PT" ? "Enviar" : "Submit"
                }
              </button>
            </div>
          </form>
        </>
      )}
    </main>
  );
}

const ConfirmationName = ({
  name,
  confirmed,
  onClick,
}: {
  name: string;
  confirmed: boolean;
  onClick?: () => void;
}) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      {confirmed ? (
        <div className="flex items-center px-3 py-3 border-[1px] border-ludarkpurple text-white rounded-full bg-[#65119999] hover:font-[700] hover:opacity-80 transition ease transform duration-300 cursor-pointer">
          <Tick confirmed />
          <p className="montserrat text-[14px] text-white ml-6 uppercase font-[500]">
            {name}
          </p>
        </div>
      ) : (
        <div className="flex items-center px-3 py-3 border-[1px] border-ludarkpurple rounded-full hover:font-[700] hover:opacity-30 transition ease transform duration-300 hover:text-white cursor-pointer">
          <div 
            className="w-[24px] h-[24px] border-[1px] border-ludarkpurple rounded-full"
          />
          <p className="montserrat text-[14px] text-ludarkpurple ml-6 uppercase ">
            {name}
          </p>
        </div>
      )}
    </div>
  );
};
