import { useEffect, useState } from "react";
import axios from "axios"

const useUser = (id) => {

  const [user, setUser] = useState();
  useEffect(() => {
    const fun = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(response.data);
      }
      catch (e) {
        console.error('Hiba a user betöltésekor', e);
      }
    }
    if (id)
      fun();
  }, [id]);

  return user;
}

export default useUser;