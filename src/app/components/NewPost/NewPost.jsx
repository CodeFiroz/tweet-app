'use client'
import style from './newpost.module.css';
import Image from 'next/image';
import { useState } from 'react';

const NewPost = () => {
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/hello', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ post: content }), // Ensure `content` is defined
      });
  
      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`Server error: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log("Server response:", data);
  
      if (data.success) {
        alert("Post submitted successfully!");
      } else {
        alert(`Failed to submit post: ${data.result || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit post. Please try again.");
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
