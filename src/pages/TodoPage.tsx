import { FC, useEffect, useState } from 'react'
import axios from 'axios'
import { ITodo } from '../types/types'
import TodoItem from '../components/TodoItem'
import List from '../components/List'

export const TodoPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchTodos();
  }, [])

  async function fetchTodos() {
    try {
      const res = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodos(res.data)
    } catch (e) {
      alert(e)
    }
  }
  return (
    <List 
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
  )
}
