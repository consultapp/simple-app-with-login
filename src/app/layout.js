import Header from "@/components/Header";
import "./globals.css";
import Main from "@/components/Main";

export const metadata = {
  title: "Simple Auth App",
  description: "Simple Auth next.js application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
