// src/contexts/SessionContext.tsx

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

type SessionContextProps = {
  children: ReactNode;
  session?: any; // You can replace `any` with your session type
};

/*************  ✨ Codeium Command ⭐  *************/
/**
 * A wrapper around the built-in SessionProvider from next-auth/react.
 *
 * If you call useSession() in a component, it will automatically use the session
 * provided in the nearest parent SessionContext.
 *
 * If you want to access the session and you are not inside a SessionContext,
 * you can't use useSession() and must use the session prop passed to your app
 * component by the SessionProvider in pages/_app.tsx.
 *
 * @param {{ children: ReactNode, session?: any }} props
 * @prop {ReactNode} children The children to render.
 * @prop {any} [session] The session to use. If not given, the one from the
 * nearest parent SessionContext is used. If there is no parent SessionContext,
 * the session from the props of your app component is used.
 * @returns {JSX.Element} The given children with the session set.
 */
/******  63a927fa-6c08-47b4-89e9-68b90ddb1752  *******/

const SessionContext = ({ children, session }: SessionContextProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default SessionContext;
