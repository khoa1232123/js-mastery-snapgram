import { Loader } from "@/components/shared";
import GridPostList from "@/components/shared/GridPostList";
import { useUserContext } from "@/context/AuthContext";
import { useGetSavedPosts } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";
import { useEffect, useState } from "react";

type Props = {};

const Saved = ({}: Props) => {
  const { user } = useUserContext();
  const { data: saves, isLoading } = useGetSavedPosts(user.id);
  const [posts, setPosts] = useState<Models.Document[]>([]);

  useEffect(() => {
    let newPosts: Models.Document[] = [];
    if (saves?.documents && saves?.documents.length === 0) return;
    saves?.documents.forEach((document) => {
      newPosts.push(document.post);
    });

    setPosts(newPosts);
  }, [saves]);

  return (
    <div className="explore-container">
      <div className="explore-inner_container">
        <h2 className="h3-bold md:h2-bold w-full">Saved Posts</h2>
        {isLoading ? (
          <Loader />
        ) : posts.length === 0 ? (
          "you have no save posts"
        ) : (
          <GridPostList posts={posts} />
        )}
      </div>
    </div>
  );
};

export default Saved;
