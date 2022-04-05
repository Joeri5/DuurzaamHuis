import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import {
  useAuthState,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";

type Props = {};

const Login: NextPage = (props: Props) => {
  const router = useRouter();

  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);

  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user && !loading) {
      router.push("/");
    }
  }, [user, loading]);

  return (
    <div className="w-screen h-screen flex gap-x-3 justify-center items-center">
      <button
        onClick={() => {
          signInWithGoogle().then(() => router.push("/"));
        }}
        className="px-5 py-2 bg-green-400 rounded-md text-gray-800 font-medium hover:bg-green-500 transition-colors active:bg-green-300"
      >
        Login met Google
      </button>
    </div>
  );
};

export default Login;
