"use server";

import { getUserSession } from "@/helpers/getUserSession";
import { revalidateTag } from "next/cache";

export const createCategory = async (data: FormData) => {
  const session = await getUserSession();
  const categoryInfo = Object.fromEntries(data.entries());

  const modifiedData = {
    name: categoryInfo.name?.toString(),
    picture: categoryInfo.picture?.toString(),
    authorId: session?.user?.id,
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/categories`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(modifiedData),
  });

  const result = await res.json();

  if (result?.id) {
    revalidateTag("CATEGORIES");
  }

  return result;
};
