import { redirect, type ActionFunctionArgs } from "@remix-run/node";
import Heart from "../../components/icons/heart";
import Logo from "../../components/icons/logo";
import { useLoaderData } from "@remix-run/react";
import { createCodeSession } from "../../util/auth/session.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const body = await request.formData();

  const groupCode = body.get("code");

  if (!groupCode) {
    return redirect("/login?error=1");
  }

  return await createCodeSession({ request, code: groupCode as string });
};

export const loader = async ({ request }: ActionFunctionArgs) => {
  const { searchParams } = new URL(request.url);

  return {
    isInvalid: searchParams.get("error") === "1",
  };
};

export default function Index() {
  const { isInvalid } = useLoaderData<typeof loader>();

  // 27/04/2024 - 15h00 - Lisbon time
  const diaDoCasamneto = new Date("2024-04-27T00:00:00.000Z");
  const agora = new Date();

  const diasRestantes = Math.floor(
    (diaDoCasamneto.getTime() - agora.getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <main className="min-h-screen p-8 ">
      <div className="w-[100%]">
        <div className="gap-4 flex items-center">
          <Logo />
          <Heart />
        </div>
        <div className="min-h-40 flex flex-col items-center justify-center my-5">
          <h3 className="text-ludarkpurple text-4xl my-5 leading-[58px] text-center">
            {/* Reconfirmar Presença */}
            Reconfirm Presence
          </h3>
          <p className="montserrat max-w-[80%]">
            {/* Olá! Como você já sabe, nosso casamento está chegando em{" "} */}
            Hi! As you already know, our wedding is coming in{" "}
            <b>{diasRestantes} days</b>.<br />
            <br /> 
            {/* É fundamental para nós garantir que tenhamos uma lista
            precisa de convidados com antecedência para evitarmos multas e
            eventuais constrangimentos com pessoas que não poderão entrar no
            local do casamento pois não confirmaram sua presença.
            <br />
            <br />
            Por isso, gostaríamos muito que você reconfirme sua presença.
            Coloque seu código abaixo para reconfirmar... */}

            It is essential for us to ensure that we have an accurate list of
            guests in advance to avoid fines and possible embarrassment with
            people who will not be able to enter the wedding venue because they
            did not confirm their presence.
            <br />
            <br />
            Therefore, we would love for you to reconfirm your presence.
            Enter your code below to reconfirm...
          </p>
        </div>
        <form
          className="flex flex-col justify-center items-center gap-6 flex-1 w-[100%] mt-20"
          method="post"
        >
          <input
            className={`
              border-[1px]
              border-ludarkpurple rounded-[15px] p-2 bg-lupurple1 w-[327px] text-center max-w-[80%] h-[50px] montserrat uppercase font-[500] placeholder:font-[300] placeholder:text-[14px] text-[16px] text-ludarkpurple placeholder-ludarkpurple`}
            type="text"
            id="code"
            name="code"
            inputMode="numeric"
            maxLength={4}
            placeholder="Code/Código"
            required
          />
          {isInvalid && (
            <p className="text-red-500 montserrat text-[14px]">
              Invalid code
            </p>
          )}
          <button
            type="submit"
            className={`
              bg-ludarkpurple
              montserrat
              text-[14px]
              uppercase
              font-[500]
              w-[209px]
              h-[50px]
              rounded-full
              text-[#fff]
            `}
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
