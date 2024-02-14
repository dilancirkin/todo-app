import React,{createContext, useContext, useState} from "react";
import {v4 as uuidv4} from "uuid";

const ToDoContext = createContext();

export const TodoProvider=({children})=>{
    const [todos,setTodos]=useState([{
        id:1,
        text:"Learn React",
        completed:false,
    }]);

    const addTodo=(text)=>{
        setTodos((prev)=>[...prev,{id:uuidv4(),completed:false,text}])
    }

    const toggleTodo=(id)=>{
        const cloned_todos = [...todos];

        const itemIndex = cloned_todos.findIndex((todo) => todo.id === id);
        const item = todos[itemIndex];
        item.completed = !item.completed;
    
        setTodos(cloned_todos);
    }

    const values={
        todos,setTodos,addTodo,toggleTodo
    };

    return <ToDoContext.Provider value={values}>
        {children}
    </ToDoContext.Provider>
};

export const useTodo=()=>{
    const context =useContext(ToDoContext);

    if(context=== undefined){
        throw new Error ("useTodo hook must be call inside TodoProvider component");

    }

    return context;
}