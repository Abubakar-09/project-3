'use client'
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [post, setPost] = useState([]);

  const fetchData = async () => {
    let a = await fetch("/api");
    let b = await a.json();
    setPost(b);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="w-[90vw] m-auto md:h-screen flex-wrap relative min-h-screen flex max-md:flex-col gap-3 items-center justify-center">
        {post.map((e, index) => (
          <Link href={`/${e.title}`}>
          <div key={index} className="w-[23vw] max-md:w-full cursor-pointer h-[45vh] flex flex-col gap-6 justify-center p-2 rounded-lg border-[1px] border-black">
            <p className="font-extrabold text-xl">{e.title}</p>
            <p className="text-md">{e.desc}</p>
          </div>
          </Link>
        ))}
      </div>
    </>
  );
}
