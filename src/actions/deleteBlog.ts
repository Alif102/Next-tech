"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const deleteBlog = async (id: number | string) => {
  console.log("Deleting blog:", id);

  await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${id}`, {
    method: "DELETE",
  });

  revalidateTag("BLOGS");
  revalidatePath("/dashboard/blogs");
};

