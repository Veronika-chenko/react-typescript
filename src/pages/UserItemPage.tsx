import { FC, useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import { IUser } from '../types/types';
import { Link } from 'react-router-dom';

type UserItemPageParams = {
    id: string;
}

export const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const {id} = useParams<UserItemPageParams>();

  useEffect(() => {
    (async function () {
          try {
        const res = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + id)
        setUser(res.data)
    } catch (e) {
      alert(e)
    }
      })()
  }, [id])
  return (
    <div>
        <Link to={'/users'}>Back</Link>
        <h1>{user?.name} user page</h1>
        <div>
            {user?.email}
        </div>
        <div>
            {user?.address.zipcode}
        </div>
    </div>
  )
}

