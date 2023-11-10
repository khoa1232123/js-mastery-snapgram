import { useUserContext } from "@/context/AuthContext";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from ".";
import { Button } from "../ui/button";

type Props = {};

const Topbar = ({}: Props) => {
  const {
    mutate: signOut,
    isSuccess,
    isLoading: isSignOutLoading,
  } = useSignOutAccount();
  const navigate = useNavigate();
  const { user } = useUserContext();

  console.log({ isSuccess });

  useEffect(() => {
    if (isSuccess) {
      navigate("/sign-in");
    }
  }, [isSuccess]);

  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to={"/"} className="flex gap-3 items-center">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={130}
            height={325}
            className=""
          />
        </Link>
        <div className="flex gap-4">
          <Button
            variant="ghost"
            className="shad-button_ghost"
            onClick={() => {
              signOut();
            }}
          >
            <img src="/assets/icons/logout.svg" alt="logout" className="" />
          </Button>
          <Link to={`/profile/${user.id}`} className="flex-center gap-3">
            <img
              src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
              alt="profile"
              className="h-8 w-8 rounded-full"
            />
            {isSignOutLoading && (
              <div className="flex-center gap-2">
                <Loader />
              </div>
            )}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
