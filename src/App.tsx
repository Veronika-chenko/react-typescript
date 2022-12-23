import { NavLink } from 'react-router-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CardPage } from './pages/CardPage';
import { EventPage } from './pages/EventPage';
import { TodoItemPage } from './pages/TodoItemPage';
import { TodoPage } from './pages/TodoPage';
import { UserItemPage } from './pages/UserItemPage';
import { UserPage } from './pages/UserPage';

function App() {
  return (
    <BrowserRouter>
      <div style={{display: "flex", gap: 15, marginBottom: 30}}>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/todos">Todos</NavLink>
        <NavLink to="/card">Card</NavLink>
        <NavLink to="/event-example">Event</NavLink>
      </div>
        <Routes>
          <Route path={"/users"} element={<UserPage/>}/>
          <Route path={"/users/:id"} element={<UserItemPage/>}/>
        <Route path={"/todos"} element={<TodoPage />} />
        <Route path={"/todo/:id"} element={<TodoItemPage/>}/>
        <Route path={"/card"} element={<CardPage/>}/>
        <Route path={"/event-example"} element={<EventPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;