"use server";

import { deleteBlog } from "@/actions/deleteBlog";
import Image from "next/image";
import Link from "next/link";

interface Blog {
  id: string;
  title: string;
  thumbnail: string;
}

interface BlogResponse {
  data: Blog[];
  pagination: {
    total: number;
    page: number;
    limit: number;
  };
}

interface PageProps {
  searchParams?: {
    page?: string;
    limit?: string;
  };
}

async function getBlogs(
  page: number,
  limit: number
): Promise<BlogResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/post?page=${page}&limit=${limit}`,
    {
      cache: "no-store",
      next: { tags: ["BLOGS"] },
    }
  );

  return res.json();
}

export default async function AllBlogs({ searchParams }: PageProps) {
  const page = Number(searchParams?.page || 1);
  const limit = Number(searchParams?.limit || 5);

  const result = await getBlogs(page, limit);
  const blogs = result.data;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">All Blogs</h1>

      <div className="overflow-x-auto">
        <table className="w-full border rounded-lg">
          <thead className="bg-muted">
            <tr>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id} className="border-t">
                <td className="p-3">
                  <Image
                    src={blog.thumbnail}
                    alt={blog.title}
                    width={60}
                    height={60}
                    className="rounded"
                  />
                </td>

                <td className="p-3">{blog.title}</td>

                <td className="p-3 flex gap-3">
                  <Link
                    href={`/dashboard/blogs/${blog.id}`}
                    className="px-3 py-1 bg-blue-500 text-white rounded"
                  >
                    Update
                  </Link>

                  <form action={deleteBlog.bind(null, blog.id)}>
                    <button
                      type="submit"
                      className="px-3 py-1 bg-red-500 text-white rounded"
                    >
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
