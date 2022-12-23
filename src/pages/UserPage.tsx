import { FC, useEffect, useState } from 'react'
import axios from 'axios'
import { IUser } from '../types/types';
import List from '../components/List';
import UserItem from '../components/UserItem';


export const UserPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetchUsers();
  }, [])

  async function fetchUsers() {
    try {
      const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(res.data)
    } catch (e) {
      alert(e)
    }
  }
  return (
    <List 
        items={users}
          renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
  )
}
