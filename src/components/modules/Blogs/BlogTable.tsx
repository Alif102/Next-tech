"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaEye, FaUser, FaTag, FaLeaf, FaStar, FaCalendarAlt } from "react-icons/fa";

interface Blog {
  id: string;
  title: string;
  thumbnail: string;
  isFeatured?: boolean;
  plantType: string;
  author?: { name: string };
  tags?: string[];
  views: number;
  createdAt: string;
}

interface BlogTableProps {
  post: Blog;
}

const BlogTable = ({ post }: BlogTableProps) => {
  return (
    <motion.tr
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ backgroundColor: "#f9fafb" }}
      transition={{ duration: 0.3 }}
      className="border-b"
    >
      {/* Thumbnail */}
      <td className="p-3">
        <div className="relative w-16 h-16 rounded-lg overflow-hidden">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover"
          />
          {post.isFeatured && (
            <div className="absolute top-1 left-1 text-yellow-400">
              <FaStar size={14} />
            </div>
          )}
        </div>
      </td>

      {/* Title */}
      <td className="p-3 font-semibold text-gray-800 max-w-xs">{post.title}</td>

      {/* Plant Type */}
      <td className="p-3 text-green-600">
        <div className="flex items-center gap-2">
          <FaLeaf />
          {post.plantType}
        </div>
      </td>

      {/* Author */}
      <td className="p-3 text-gray-600">
        <div className="flex items-center gap-2">
          <FaUser />
          {post.author?.name || "Unknown"}
        </div>
      </td>

      {/* Tags */}
      <td className="p-3">
        <div className="flex flex-wrap gap-1">
          {post.tags?.map((tag, index) => (
            <span
              key={index}
              className="flex items-center gap-1 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
            >
              <FaTag size={10} />
              {tag}
            </span>
          ))}
        </div>
      </td>

      {/* Views */}
      <td className="p-3 text-gray-500">
        <div className="flex items-center gap-2">
          <FaEye />
          {post.views}
        </div>
      </td>

      {/* Date */}
      <td className="p-3 text-gray-400 text-sm">
        <div className="flex items-center gap-2">
          <FaCalendarAlt />
          {new Date(post.createdAt).toLocaleDateString()}
        </div>
      </td>
    </motion.tr>
  );
};

export default BlogTable;
