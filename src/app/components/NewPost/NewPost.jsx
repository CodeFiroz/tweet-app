'use client';
import style from './newpost.module.css';
import Image from 'next/image';
import { useState } from 'react';

const NewPost = () => {
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',  // Make sure the method is POST
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "content": "Hellow" }),  // Send the content as part of the request body
      });
  
      const data = await response.json();
  
      if (data.success) {
        alert("Post Added to Database");
      } else {
        alert("Error uploading post");
      }
    } catch (error) {
      console.log(error);
      alert("Failed");
    }
  };
  return (
    <div className={`section ${style.newform}`}>
      <Image src='/img/monster.png' width={50} height={50} alt="Monster icon" />
      <div>
        <textarea
          name="content"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's Happening?"
        />
        <button onClick={handleSubmit}>Post</button>
      </div>
    </div>
  );
};

export default NewPost;
