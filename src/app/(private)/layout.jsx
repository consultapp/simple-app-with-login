import AuthController from "components/Authentification/AuthController";
import "./style.css";

export const metadata = {
  title: "Private Layout - Simple Auth App",
  description: "Simple Auth next.js app. Need Auth.",
};

export default function Layout({ children }) {
  return <AuthController>{children}</AuthController>;
}
