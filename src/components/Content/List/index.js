import React from 'react'
import { useTodo } from '../../../context/ToDoContext'
import Item from './Item';

const List = () => {

    const {todos}=useTodo();

  return (
    <ul className="todo-list">
        {
            todos.map((todo)=>(
               <Item key={todo.id} todo={todo}/>
            ))
        }
   
  </ul>
  )
}

export default List