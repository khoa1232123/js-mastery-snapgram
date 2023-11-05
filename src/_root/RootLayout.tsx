import { Bottombar, LeftSidebar, Topbar } from "@/components/shared";
import { Outlet } from "react-router-dom";

type Props = {};

const RootLayout = (props: Props) => {
  return (
    <div className="w-full md:flex">
      <Topbar />
      <LeftSidebar />

      <section className="flex flex-1 h-full">
        <Outlet />
      </section>
      <Bottombar />
    </div>
  );
};

export default RootLayout;
