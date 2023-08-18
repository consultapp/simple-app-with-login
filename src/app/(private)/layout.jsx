import Auth from "@/components/Auth";

export const metadata = {
  title: "Private Layout - Simple Auth App",
  description: "Simple Auth next.js app. Need Auth.",
};

export default function Layout({ children }) {
  return <Auth>{children}</Auth>;
}
