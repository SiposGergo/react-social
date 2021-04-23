import React, { useState, useEffect } from "react"
import axios from "axios";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fun = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        setComments(response.data);
      }
      catch {
        console.error('Hiba a kommentek betöltésekor');
      }
    }
    if (postId)
      fun();
  }, [postId]);

  return (<div className="list-group">
    {comments.map(c => <div key={c.id} className="list-group-item">{c.name}</div>)}
  </div>)

}

export default Comments;