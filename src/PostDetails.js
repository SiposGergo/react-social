import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import UserInfo from "./UserInfo"
import useUser from "./useUser"
import Comments from "./Comments"
import {useTranslation} from "react-i18next"

const PostDetails = () => {

  const { id } = useParams();
  const [post, setPost] = useState([]);
  const user = useUser(post.userId)
  const { t } = useTranslation();

  useEffect(() => {
    const fun = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setPost(response.data);
      }
      catch {
        console.error('Hiba a post részletek betöltésekor');
      }
    }
    fun();
  }, [id]);

  return <div className="card m-2">
    <div className="card-body">
      <div className="d-flex justify-content-between">
        <h5 className="card-title">{post.title}</h5>
        <Link to="/posts">
          <button className="btn btn-primary">{t("back")}</button>
        </Link>
      </div>
      {user && <UserInfo {...user} />}
      <p>{post.body}</p>

      <Comments postId={post.id} />

    </div>
  </div>
}

export default PostDetails;