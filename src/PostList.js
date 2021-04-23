import React, { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from "./Spinner";
import UserInfo from "./UserInfo";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fun = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      }
      catch {
        console.error('Hiba a postok betöltésekor');
      }
    }
    fun();
  }, []);

  useEffect(() => {
    const fun = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      }
      catch {
        console.error('Hiba a userek betöltésekor');
      }
    }
    fun();
  }, []);

  return (<div>
    <div className="m-2">
      <input placeholder="Type to filter posts..."
        className="form-control"
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}></input>
    </div>
    {/* Ez itt mehetne egy saját hookba usePosts néven, ami lekérné a psotokat aztán a szűrést is kezelné */}
    { users.length && posts.length ? (posts
      .filter(x => !filter ||
        x.title.toLowerCase().includes(filter.toLowerCase()) ||
        x.body.toLowerCase().includes(filter.toLowerCase()))
      .map(p => <article key={p.id} className="card m-2">
        <div className="card-body">
          <Link to={`/posts/${p.id}`}><h5 className="card-title">{p.title}</h5></Link>
          <UserInfo {...users.find(x => x.id === p.userId)} />
          <p>{p.body}</p>
        </div>
      </article>)) : <Spinner />}
  </div>)

}

export default PostList;
