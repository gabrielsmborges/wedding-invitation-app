import { useOutletContext } from "@remix-run/react";
import { GroupCodeType } from "../../util/checkCode.server";
import { useState } from "react";
import Tick from "../../components/icons/tick";
import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { guestBase } from "../../util/airtable";
import { getCode } from "../../util/auth/session.server";

export const action = async ({
    request
}: ActionFunctionArgs) => {
    const body = await request.formData();
    const coming = body.getAll('user');

    const groupCode = await getCode(request);

    const fullGroup = await guestBase('General View').select({
        view: "Grid view",
        cellFormat: "json",
        filterByFormula: `Group = "${groupCode}"`,
        maxRecords: 100,
        fields: [
            "Name"
        ]
    }).all()

    fullGroup.forEach(async (guest) => {
        if (coming.includes(guest.id)) {
            await guestBase('General View').update([
                { 
                    id: guest.id,
                    fields: {
                        "Confirmation 1": "Yes"
                    }
                }
            ])
        } else {
            await guestBase('General View').update([
                { 
                    id: guest.id,
                    fields: {
                        "Confirmation 1": "No"
                    }
                }
            ])
        }
    })

    const landingWebsite = process.env.LANDING_WEBSITE_URL;

    if (!landingWebsite) {
        return redirect("https://gabriel-luanne.com/disclaimer");
    }


    return redirect(landingWebsite + "/disclaimer?code=" + groupCode);

}

const ReconfirmPage = () => {
  const { group } = useOutletContext<{ group: GroupCodeType[] }>();

  const language = group[0].language || "EN"

  const [selectedUsers, setSelectedUsers] = useState<typeof group>(group.filter((user) => user.confirmed));

  const comingUsers = group.filter(
    (user) =>
      selectedUsers.findIndex((selectedUser) => selectedUser.id === user.id) !==
      -1
  );

  const notComingUsers = group.filter(
    (user) =>
      selectedUsers.findIndex((selectedUser) => selectedUser.id === user.id) ===
      -1
  );

  return (
    <form className="p-5" method="post">
      <h3 className="text-ludarkpurple text-4xl my-5 leading-[58px] text-center">
        {/* Reconfirmar Presença */}
        {
            language === "PT" ? "Reconfirmar Presença" : "Reconfirm Presence"
        }
      </h3>

      {group.map((user) => (
        <input
          key={user.id}
          type="checkbox"
          name="user"
          value={user.id}
          id={user.id}
          className="hidden"
          onChange={() => {}}
          checked={
            selectedUsers.findIndex(
              (selectedUser) => selectedUser.id === user.id
            ) !== -1
          }
        />
      ))}

      <div className="flex items-center justify-center flex-col gap-2 my-10">
        <p className="montserrat text-base text-ludarkpurple">
          {/* Confirm who can and cannot attend the wedding: */}
            {
                language === "PT" ? "Confirme quem pode e quem não pode comparecer ao casamento:" : "Confirm who can and cannot attend the wedding:"
            }
        </p>
        <p className="text-[14px] montserrat">
          {/* You have until the <b>23rd of March</b> to confirm who can attend the
          event. */}
            {
                language === "PT" ? <>Você tem até o dia <b>23 de Março</b> para confirmar quem pode comparecer ao evento.</> : <>You have until the <b>23rd of March</b> to confirm who can attend the event.</>
            }
        </p>
        <p>
            {/* Please select names that will attend and leave unselected those who won{"'"}t. */}
            {
                language === "PT" ? "Por favor, selecione os nomes que irão comparecer e deixe desmarcados os que não irão." : "Please select names that will attend and leave unselected those who won't."
            }
        </p>
      </div>

      <div>
        <div className="flex items-center w-full">
          <div className="flex-1 h-[1px] bg-gray mx-4" />
          <p className="montserrat font-semibold">
            {/* Coming ✅ */}
            {
                language === "PT" ? "Confirmados ✅" : "Coming ✅"
            }
            </p>
          <div className="flex-1 h-[1px] bg-gray mx-4" />
        </div>
        <div className="flex flex-col gap-3 my-5">
          {comingUsers.length ? (
            comingUsers.map((user) => (
              <ConfirmationName
                key={user.id}
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
            ))
          ) : (
            <p className="text-center montserrat">
              {/* empty state */}
              {/* No one coming */}
                {
                    language === "PT" ? "Ninguém confirmado" : "No one coming"
                }
            </p>
          )}
        </div>
      </div>

      <div className="h-5" />

      <div>
        <div className="flex items-center w-full">
          <div className="flex-1 h-[1px] bg-gray mx-4" />
          <p className="montserrat font-semibold">
            {/* Not Coming ❌ */}
            {
                language === "PT" ? "Não Confirmados ❌" : "Not Coming ❌"
            }
            </p>
          <div className="flex-1 h-[1px] bg-gray mx-4" />
        </div>
        <div className="flex flex-col gap-3 my-5">
          {notComingUsers.length ? (
            notComingUsers.map((user) => (
              <ConfirmationName
                key={user.id}
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
            ))
          ) : (
            <p className="text-center montserrat">
              {/* empty state */}
              {/* Everyone is coming 🎉 */}
                {
                    language === "PT" ? "Todos confirmados 🎉" : "Everyone is coming 🎉"
                }
            </p>
          )}
        </div>
      </div>

      <div className="montserrat text-center italic text-xs">
        {/* Your invitation will be considered as{" "}
        <b className="text-red-400">rejected</b> if we don’t get your response
        by the <b>22 of March 2024</b> */}

        {
            language === "PT" ? <>Seu convite será considerado como <b className="text-red-400">rejeitado</b> se não recebermos sua resposta até o dia <b>23 de Março de 2024</b></> : <>Your invitation will be considered as{" "}
        <b className="text-red-400">rejected</b> if we don’t get your response
        by the <b>23 of March 2024</b></>
        }

      </div>
      <div className="flex items-center justify-center mt-10">
        <button
          type="submit"
          className=" bg-ludarkpurple p-2 rounded-full text-[#fff] montserrat text-[14px] uppercase font-[500] w-[209px] h-[50px] mx-auto"
        >
          {/* Continue */}

            {
                language === "PT" ? "Continuar" : "Continue"
            }
        </button>
      </div>
    </form>
  );
};

export default ReconfirmPage;

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
    <div
      onClick={onClick}
      onKeyUp={() => {}}
      role="radio"
      tabIndex={0}
      aria-checked={confirmed}
      className="cursor-pointer"
    >
      {confirmed ? (
        <div className="flex items-center px-3 py-3 border-[1px] border-ludarkpurple text-white rounded-full bg-[#65119999] hover:font-[700] hover:opacity-80 transition ease transform duration-300 cursor-pointer">
          <Tick confirmed />
          <p className="montserrat text-[14px] text-white ml-6 uppercase font-[500]">
            {name}
          </p>
        </div>
      ) : (
        <div className="flex items-center px-3 py-3 border-[1px] border-ludarkpurple rounded-full hover:font-[700] hover:opacity-30 transition ease transform duration-300 hover:text-white cursor-pointer">
          <div className="w-[24px] h-[24px] border-[1px] border-ludarkpurple rounded-full" />
          <p className="montserrat text-[14px] text-ludarkpurple ml-6 uppercase ">
            {name}
          </p>
        </div>
      )}
    </div>
  );
};
