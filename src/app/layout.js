import "./globals.css";
import ClientProvider from "./components/ClientProvider/ClientProvider";

export const metadata = {
  title: "Twitter Clone",
  description: "Created by Firoz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
