import { Navigate, Outlet } from "react-router-dom";

type Props = {};

const AuthLayout = (props: Props) => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <section className="flex-center flex-1 flex-col py-10">
          <Outlet />
        </section>
      )}
    </>
  );
};

export default AuthLayout;
