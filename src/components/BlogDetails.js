import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({post}) => {
  return (
    
  
    <div className="max-w-[620px] self-center  mt-[60px]  w-11/12  mb-[50px] flex flex-col  ">

    <div className="max-w-[620px] self-center  w-11/12  flex flex-col gap-y-3 my-[10px]">
      <NavLink to={`/blog/${post.id}`}>
        <span className="font-bold text-lg ">{post.title}</span>
      </NavLink>
      <p>
        By
        <span className="italic">{post.author}</span>
        on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="underline font-bold">{post.category}</span>
        </NavLink>
      </p>
      <p className="text-[14px]">Posted on {post.date}</p>
      <p className="text-[18px] mt-[13px]">{post.content}</p>
      <div>
        {post.tags.map((tag, index) => (
          <NavLink className="flex flex-wrap gap-x-2 items-center" key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span className="text-sm font-semibold underline text-blue-700 cursor-pointer" >{` #${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>


    </div>
    
  );
};

export default BlogDetails;
