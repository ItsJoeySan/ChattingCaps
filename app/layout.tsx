import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToasterContext from "./context/ToasterContext";
import AuthContext from "./context/AuthContext";
import getUsers from "./actions/getUsers";
import UserList from "./users/components/UserList";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chatting Caps",
  description: "A chatting app for every friend of mine -Joey ",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const users = await getUsers();
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          <UserList items={users} />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
