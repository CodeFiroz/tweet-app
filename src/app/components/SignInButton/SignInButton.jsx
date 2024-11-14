"use client";

import style from './signin.module.css';
import Image from "next/image";
import { signIn, useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';

export default function SignInButton() {
  const { data: session } = useSession();
  const [username, setUsername] = useState("");

  // Use useEffect to set the username when session data is available
  useEffect(() => {
    if (session?.user?.name) {
      setUsername(session.user.name);
    }
  }, [session]);

  return (
    <div className={style.signIn}>
      {session ? (
        <button onClick={() => signIn("google")}>
          <Image src='/img/monster.png' width={40} height={40} alt="User image" />
          <span>{username}</span>
        </button>
      ) : (
        <button onClick={() => signIn("google")}>
          <Image src='/img/monster.png' width={40} height={40} alt="User image" />
          <span>Sign in</span>
        </button>
      )}
    </div>
  );
}
