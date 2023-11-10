import { Loader } from "@/components/shared";
import PostStats from "@/components/shared/PostStats";
import { Button } from "@/components/ui/button";
import { useUserContext } from "@/context/AuthContext";
import { useGetPostById } from "@/lib/react-query/queriesAndMutations";
import { multiFormatDateString } from "@/lib/utils";
import { Link, useParams } from "react-router-dom";

type Props = {};

const PostDetails = ({}: Props) => {
  const { id } = useParams();
  const { data: post, isLoading } = useGetPostById(id || "");
  const { user } = useUserContext();

  return (
    <div className="post_details-container">
      {isLoading || !post ? (
        <Loader />
      ) : (
        <div className="post_details-card">
          <img src={post.imageUrl} alt="post" className="post_details-img" />
          <div className="post_details-info">
            <div className="flex-1 flex gap-4 flex-col w-full">
              <div className="flex items-center justify-between w-full gap-2">
                <Link to={`/profile/${post?.creator.$id}`}>
                  <div className="flex items-center gap-3">
                    <img
                      src={post?.creator?.imageUrl || "/assets/icons/"}
                      alt="creator"
                      className="rounded-full w-12 lg:h-12"
                    />
                    <div className="flex flex-col">
                      <p className="base-medium lg:body-bold text-light-1">
                        {post?.creator.name}
                      </p>
                      <div className="flex-center gap-2 text-light-3">
                        <p>{multiFormatDateString(post?.$createdAt)}</p> -{" "}
                        <p className="subtle-semibold lg:small-regular">
                          {post?.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="flex items-center justify-center gap-4">
                  <Link
                    to={`/update-post/${post.$id}`}
                    className={`${user.id !== post.creator.$id && "hidden"}`}
                  >
                    <img
                      src="/assets/icons/edit.svg"
                      alt="edit"
                      width={30}
                      height={30}
                      className=""
                    />
                  </Link>
                  <Button
                    className={`ghost details-delete btn ${
                      user.id !== post.creator.$id && "hidden"
                    }`}
                  >
                    <img
                      src="/assets/icons/delete.svg"
                      alt="edit"
                      width={30}
                      height={30}
                      className=""
                    />
                  </Button>
                </div>
              </div>
              <hr className="border w-full border-dark-4/80" />
              <div className="small-medium lg:base-medium w-full">
                <p>{post?.caption}</p>
                <ul className="flex gap-1 mt-2">
                  {post?.tags.map((tag: string) => (
                    <li key={tag} className="text-light-3">
                      #{tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <PostStats post={post} userId={user?.id || ""} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
