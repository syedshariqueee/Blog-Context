import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Home from "./pages/Home.js";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";
import BlogPage from "./pages/BlogPage.js";
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";



export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  const [searchParams,setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    // // Fetch the inital Blogposts data
    // fetchBlogPosts();
    // // eslint-disable-next-line react-hooks/exhaustive-deps

    const page = searchParams.get('page') ?? 1;
    if(location.pathname.includes("tags")){
      // Tag Page 
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),null,category);
    }
    else{
      fetchBlogPosts(Number(page))
    }
  }, [location.pathname,location.search]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<BlogPage /> } />
      <Route path="/tags/:tag" element={<TagPage />} />
      <Route path="/categories/:category" element={<CategoryPage />} />
    </Routes>
  );
}