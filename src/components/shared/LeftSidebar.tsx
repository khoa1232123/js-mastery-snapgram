import { sidebarLinks } from "@/constants";
import { useUserContext } from "@/context/AuthContext";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import { useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Loader } from ".";
import { Button } from "../ui/button";

type Props = {};

const LeftSidebar = ({}: Props) => {
  const { pathname } = useLocation();
  const {
    mutate: signOut,
    isSuccess,
    isLoading: isSignOutLoading,
  } = useSignOutAccount();
  const navigate = useNavigate();
  const { user } = useUserContext();

  useEffect(() => {
    if (isSuccess) {
      navigate("/sign-in");
    }
  }, [isSuccess]);

  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
        <Link to={"/"} className="flex gap-3 items-center">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={170}
            height={36}
            className=""
          />
        </Link>
        <Link to={`/profile/${user.id}`} className="flex gap-3 items-center">
          <img
            src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
            alt="profile"
            className="h-14 w-14 rounded-full"
          />
          <div className="flex flex-col">
            <p className="body-bold">{user.name}</p>
            <p className="small-regular text-light-3">@{user.name}</p>
          </div>
        </Link>
        <ul className="flex flex-col gap-2">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.route;
            return (
              <li
                key={link.label}
                className={`leftsidebar-link group ${
                  isActive && "bg-primary-500"
                }`}
              >
                <NavLink
                  to={link.route}
                  className="flex gap-4 items-center p-4"
                >
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`group-hover:invert-white ${
                      isActive && "invert-white"
                    }`}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <Button
        variant="ghost"
        className="leftsidebar-link group p-4 hover:bg-primary-500 gap-4 justify-start h-14"
        onClick={() => {
          signOut();
        }}
      >
        <img
          src="/assets/icons/logout.svg"
          alt="logout"
          className={`w-6 h-6 group-hover:invert-white`}
        />
        {isSignOutLoading && (
          <div className="flex-center gap-2">
            <Loader />
          </div>
        )}
        Logout
      </Button>
    </nav>
  );
};

export default LeftSidebar;
