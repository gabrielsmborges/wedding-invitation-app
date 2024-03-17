import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { checkCodeAndLogin } from "../checkCode.server";

// export the whole sessionStorage object
export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: [
      process.env.SESSION_SECRET as string,
    ], // replace this with an actual secret
    secure: process.env.NODE_ENV === "production", // enable this in prod only
  },
});

// you can also export the methods individually for your own usage
const { getSession, commitSession, destroySession } = sessionStorage;

export async function logout(request: Request) {
  const session = await getSession(
    request.headers.get("Cookie")
  )
  return redirect("/login", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
}

const CODE_KEY = "groupCode";

export async function createCodeSession({
  code,
  request,
}: {
  request: Request;
  code: string;
}) {
  const session = await getSession(
    request.headers.get("Cookie")
  );
  try {
    await checkCodeAndLogin(code);
    session.set(CODE_KEY, code);

    return redirect("/", {
      headers: {
        "Set-Cookie": await commitSession(session, {
          // 1 week
          maxAge: 60 * 60 * 24 * 7,
        }),
      },
    });
  } catch (error) {
    console.error(error);
    await clearCodeSession(request);
    return redirect("/login?error=1");
  }
}

export async function getCode(
  request: Request
): Promise<string | undefined> {
  const session = await getSession(
    request.headers.get("Cookie")
  );
  const codeToReturn = session.get(CODE_KEY);

  try {
    await checkCodeAndLogin(codeToReturn);
  } catch (error) {
    await clearCodeSession(request);
    return undefined;
  }


  if (!codeToReturn) {
    return undefined;
  }

  return codeToReturn;
}

export async function clearCodeSession(
  request: Request
) {
  const session = await getSession(
    request.headers.get("Cookie")
  );
  session.set(CODE_KEY, undefined);
  return redirect("/", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}