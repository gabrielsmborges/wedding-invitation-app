import { Outlet, redirect, useLoaderData } from "@remix-run/react";
import { getCode } from "../../util/auth/session.server";
import Navbar from "../../components/Navbar";
import { LoaderFunctionArgs } from "@remix-run/node";
import { checkCodeAndLogin } from "../../util/checkCode.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const code = await getCode(request);

  if (!code) {
    return redirect("/login");
  }

  const group = await checkCodeAndLogin(code);

  return { group };
};

const Layout = () => {

  const group = useLoaderData<typeof loader>();

  return (
    <div>
      <Navbar />
      <div className="mt-24">
      <Outlet context={group} />
      </div>
    </div>
  );
};

export default Layout;
