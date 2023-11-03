import { Navigate, Outlet } from "react-router-dom";

type Props = {};

const AuthLayout = (props: Props) => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex-center flex-1 flex-col py-10">
            <Outlet />
          </section>
          <img
            src="/assets/images/side-img.svg"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat "
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;
