import "./globals.css";
import StorePreloader from "@/components/StorePreloader/StorePreloader";
import { StoreProvider } from "@/components/StoreProvider/StoreProvider";
import { Header } from "@/components/Header/Header";
import Main from "@/components/Main/Main";

export const metadata = {
  title: "Simple Auth App",
  description: "Simple Auth next.js application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <StorePreloader />
        <StoreProvider>
          <Header />
          <Main>{children}</Main>
        </StoreProvider>
      </body>
    </html>
  );
}
