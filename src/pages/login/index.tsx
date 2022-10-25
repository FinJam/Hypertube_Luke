import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../../utils/trpc";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "../index.module.css";
const Login: NextPage = () => {
  const { data } = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div>Login page</div>
    <AuthShowcase />
    </>
  );
};

export default Login;

const AuthShowcase: React.FC = () => {
  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery();

  const { data: sessionData } = useSession();

  return (
    <div className={styles.authShowcase}>
      {sessionData && <p>Logged in as {sessionData?.user?.name}</p>}
      {secretMessage && <p>{secretMessage}</p>}
      <button
        className={styles.signInButton}
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};