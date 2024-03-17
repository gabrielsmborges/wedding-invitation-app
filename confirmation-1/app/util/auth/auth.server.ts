import { Authenticator } from "remix-auth";
import { sessionStorage } from "./session.server";

export type SessionUser = {
    code: string;
}
// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export const authenticator = new Authenticator<SessionUser>(sessionStorage);