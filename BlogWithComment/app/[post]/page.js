'use client'
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Page = () => {
  const params = decodeURIComponent(useParams().post);
  const [Post, setPost] = useState([]);
  const [CurrentPost, setCurrentPost] = useState(null);
  const [Comment, setComment] = useState([]);
  const [feedback, setfeedback] = useState('')
  const [CurrentPostComment, setCurrentPostComment] = useState([])

  const fetchData = async () => {
    let a = await fetch("/api");
    let b = await a.json();
    setPost(b);
  };

  useEffect(() => {
    fetchData();
    let a = localStorage.getItem("comment")
    if(a!=null){
      setComment(JSON.parse(a))
    }else{
      localStorage.setItem("comment", '')
    }
  }, []);

  useEffect(() => {
    if (Post.length > 0) {
      const filteredPost = Post.find(e => e.title === params);
      setCurrentPost(filteredPost);
    }
  }, [Post, params]);

  const handleFeedback = () => {
    setComment([...Comment, { post_title: params, feedback }])
    localStorage.setItem("comment", JSON.stringify([...Comment, { post_title: params, feedback }]))
    setfeedback('')
  }

  useEffect(() => {
    setCurrentPostComment(Comment.filter(e => e.post_title === params))
  }, [Comment])
  
  return (
    <div>
      {CurrentPost ? (
        <div className='flex flex-col w-[90vw] m-auto min-h-screen justify-center gap-10'>
          <h1 className='font-extrabold text-4xl'>{CurrentPost.title}</h1>
          <p className='text-md'>{CurrentPost.body}</p>
          <div>
            <input type="text" value={feedback} onChange={(e) => setfeedback(e.target.value)} placeholder="Enter Your Comment For this Post" className="p-2 outline-none placeholder:textstone-700 border-none focus:ring-0 w-full" />
            <div className='w-full h-[1px] bg-slate-800 my-3'></div>
            <button onClick={() => handleFeedback()} className='p-2 text-sm border-[1px] border-black rounded-lg'>Add Comment</button>
          </div>
          <div className='flex flex-col gap-2'>
            {(CurrentPostComment.length > 0) ? <>
              {CurrentPostComment.map((e, index) => {
                return (<>
                  <div key={index}>
                    {e.feedback}
                  </div>
                </>)
              })}
            </> : <>No Comment</>}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Page;