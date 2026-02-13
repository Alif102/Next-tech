"use client";

import { createCategory } from "@/actions/createCategory";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Category {
  id: string;
  name: string;
  picture: string;
}

const AddCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_API}/categories`)
      .then((res) => res.json())
      .then((data: Category[]) => setCategories(data));
  }, []);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    const result = await createCategory(formData);

    if (result?.id) {
      setCategories((prev) => [result as Category, ...prev]);
    }

    setLoading(false);
  }

  return (
    <div className="mx-auto space-y-8">
      {/* FORM */}
      <form
        action={handleSubmit}
        className="p-6 bg-white shadow-md rounded-lg space-y-4 w-full"
      >
        <h2 className="text-xl font-semibold mb-4">Create Category</h2>

        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            name="name"
            placeholder="Category name"
            required
            className="w-full rounded-md border px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Picture URL</label>
          <input
            type="url"
            name="picture"
            required
            className="w-full rounded-md border px-3 py-2"
          />
        </div>

        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-md"
        >
          {loading ? "Saving..." : "Submit"}
        </button>
      </form>

      {/* TABLE */}
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-3">Category List</h3>

        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">#</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Image</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((cat, i) => (
              <tr key={cat.id}>
                <td className="border p-2">{i + 1}</td>
                <td className="border p-2">{cat.name}</td>
                <td className="border p-2">
                  <Image
                    src={cat.picture}
                    alt={cat.name}
                    width={56}
                    height={56}
                    className="rounded object-cover"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddCategory;
