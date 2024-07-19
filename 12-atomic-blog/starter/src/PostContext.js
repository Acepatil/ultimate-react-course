import { createContext,useContext,useMemo,useState } from "react";
import { faker } from "@faker-js/faker";

function createRandomPost() {
    return {
      title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
      body: faker.hacker.phrase(),
    };
  }

const PostContent=createContext()

function PostProvider({children}){
    const [posts, setPosts] = useState(() =>
        Array.from({ length: 30 }, () => createRandomPost())
      );
    
      const [searchQuery, setSearchQuery] = useState("");
      
    
      // Derived state. These are the posts that will actually be displayed
      const searchedPosts =
        searchQuery.length > 0
          ? posts.filter((post) =>
              `${post.title} ${post.body}`
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            )
          : posts;
    
      function handleAddPost(post) {
        setPosts((posts) => [post, ...posts]);
      }
    
      function handleClearPosts() {
        setPosts([]);
      }


      const value=useMemo(()=>{
        return{
          posts: searchedPosts,
        onAddPost: handleAddPost,
        onClearPosts: handleClearPosts,
        // same as searchQuery
        searchQuery: searchQuery,
        setSearchQuery,
        }
      },[searchQuery,searchedPosts])
      return(
        <PostContent.Provider
      value={value}

    >
        {children}
    </PostContent.Provider>
      )
}

function usePosts(){
    const context=useContext(PostContent)
    if(context===undefined)
        throw new Error("Post Context was outside of the Post Provider")
    return context
}

export { PostProvider,usePosts};