"use client";
import { SessionProvider } from "next-auth/react";
import Header from "../Header/Header";

export default function ClientProvider({ children }) {
  return (
    <SessionProvider>
      <Header />
      {children}
    </SessionProvider>
  );
}
