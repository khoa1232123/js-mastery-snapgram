import { PostForm } from "@/components/forms";

type Props = {};

const CreatePost = ({}: Props) => {
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
          <h2 className=" h3-bold md:h2-bold text-left w-full">Create Post</h2>
        </div>
        <PostForm action="create" />
      </div>
    </div>
  );
};

export default CreatePost;
