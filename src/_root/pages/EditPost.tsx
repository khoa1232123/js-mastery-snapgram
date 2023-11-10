import { PostForm } from "@/components/forms";
import { Loader } from "@/components/shared";
import { useGetPostById } from "@/lib/react-query/queriesAndMutations";
import { useParams } from "react-router-dom";

type Props = {};

const EditPost = ({}: Props) => {
  const { id } = useParams();

  const { data: post, isLoading } = useGetPostById(id || "");

  if (isLoading) {
    return <Loader />;
  }

  console.log({ post });

  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start">
          <img
            src={"/assets/icons/add-post.svg"}
            alt="add"
            width={36}
            height={36}
            className=""
          />
          <h2 className=" h3-bold md:h2-bold text-left w-full">Edit Post</h2>
        </div>
        <PostForm post={post} action="update" />
      </div>
    </div>
  );
};

export default EditPost;
