import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./(components)/Nav";
import AuthProvider from "./(components)/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auth  Demo",
  description: "Created for Auth Demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <AuthProvider>
          <Nav />
          <div className="m-2">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
