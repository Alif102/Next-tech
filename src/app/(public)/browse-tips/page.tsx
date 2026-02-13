"use client";

import { useEffect, useState } from "react";
import { FaTable, FaThLarge } from "react-icons/fa";
import BlogCard from "@/components/modules/Blogs/BlogCard";
import BlogTable from "@/components/modules/Blogs/BlogTable";

interface Blog {
  id: string;
  title: string;
  thumbnail: string; // unified with BlogTable
  plantType: string;
  author?: { name: string }; // optional, as in BlogTable
  tags?: string[];
  views: number;
  createdAt: string;
  isFeatured?: boolean;
}

const AllBlogsPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [view, setView] = useState<"table" | "card">("table");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`);
        const data = await res.json();

        // Map API response to match Blog type
        const mappedBlogs: Blog[] = data.data.map((b: any) => ({
          id: b.id,
          title: b.title,
          thumbnail: b.image || b.thumbnail, // fallback
          plantType: b.plantType,
          author: b.author
            ? typeof b.author === "string"
              ? { name: b.author }
              : b.author
            : undefined,
          tags: b.tags || [],
          views: b.views,
          createdAt: b.createdAt,
          isFeatured: b.isFeatured || false,
        }));

        setBlogs(mappedBlogs);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center my-6">
        <h2 className="text-4xl">Browse Gardening Tips</h2>

        <div className="flex gap-4 text-2xl cursor-pointer">
          <FaTable
            onClick={() => setView("table")}
            className={view === "table" ? "text-green-600" : "text-gray-400"}
          />
          <FaThLarge
            onClick={() => setView("card")}
            className={view === "card" ? "text-green-600" : "text-gray-400"}
          />
        </div>
      </div>

      {view === "card" ? (
        <div className="grid grid-cols-3 gap-4 mx-auto max-w-6xl my-5">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} post={blog} />
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
          <table className="min-w-full text-left">
            <thead className="bg-green-600 text-white text-sm uppercase">
              <tr>
                <th className="p-4">Image</th>
                <th className="p-4">Title</th>
                <th className="p-4">Plant Type</th>
                <th className="p-4">Author</th>
                <th className="p-4">Tags</th>
                <th className="p-4">Views</th>
                <th className="p-4">Created</th>
              </tr>
            </thead>

            <tbody>
              {blogs.map((blog) => (
                <BlogTable key={blog.id} post={blog} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllBlogsPage;
