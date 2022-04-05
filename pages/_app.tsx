import "../styles/globals.css";
import type { AppProps } from "next/app";
import SideBar from "../components/SideBar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!user && !loading) {
      router.push("/login");
    }
  }, [user, loading]);

  return (
    <>
      {user ? <SideBar /> : null}
      {user ? (
        <div className="ml-72">
          <Component {...pageProps} />
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;