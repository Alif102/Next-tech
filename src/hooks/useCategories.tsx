// frontend hook
"use client";
import { useState, useEffect } from "react";

export default function useCategories() {
  const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_API}/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data); // যদি backend {data: [...] } দেয়, use data.data
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return { categories, loading };
}
