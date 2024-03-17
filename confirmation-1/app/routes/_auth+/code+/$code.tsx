import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { createCodeSession } from "../../../util/auth/session.server";

export const loader = async ({ params, request}: LoaderFunctionArgs) => {

    console.log("params", params);

    if (!params.code) {
        return redirect("/login?error=1");
    }

    return await createCodeSession({ request, code: params.code });

};