/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "@/components/modules/Blogs/BlogCard";
import CTA from "@/components/modules/Home/CTA";
import Hero from "@/components/modules/Home/Hero";
import PlantDoctor from "@/components/modules/Home/PlantDoctor";
import SeasonalGuide from "@/components/modules/Home/SeasonalGuide";
export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    next: {
      tags: ["BLOGS"],
    },
  });
  const { data: blogs } = await res.json();

  return (
    <div>
      <Hero />

   
       <div
        
        className="text-center mt-12 md:mt-20 mb-16  "
      >
        <div className="relative inline-block">
          <div
           
         
            className="absolute -top-4 -left-4 -right-4 -bottom-4 bg-green-500/10 rounded-full"
          />
          <h1
            className={`text-4xl text-green-900 md:text-5xl font-bold mb-4 relative z-10
            }`}
          >
            Top <span className="text-green-600">Trending</span> Gardening Tips
          </h1>
        </div>
        <p
          className={`text-lg mb-5 text-gray-800  max-w-2xl mx-auto`}
        >
          Discover the most popular gardening advice from our community experts
        </p>
      </div>

      <div className="grid  md:grid-cols-3 grid-cols-1 gap-4 max-w-6xl mx-auto my-5 mb-24  ">
        {blogs?.slice(0, 6).map((blog: any) => (
          <BlogCard key={blog?.id} post={blog} />
        ))}
      </div>

      <div>
        <SeasonalGuide/>
      </div>
      <div>
        <PlantDoctor/>
      </div>
      <div>
        <CTA/>
      </div>
    </div>
  );
}
