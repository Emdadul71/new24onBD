import Header from "@/modules/@common/@layout/header";
import "./../../styles/main.scss";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main>{children}</main>
    </div>
  );
}
