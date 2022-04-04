import React from "react";
import Search from "../../codexlab/Search/Search";
import TodoItem from "./TodoItem/TodoItem";
import './Todos.scss';

export const Todos = () => {

    let todoList = [
        {
            sno: 0,
            title: 'Todo Title 1'
        },
        {
            sno: 1,
            title: 'Todo Title 2'
        }, 
        {
            sno: 2,
            title: 'Todo Title 3'
        }
    ];
 
    const onDelete = (todo: {
        sno: number
    }) => {
        console.log(todo);
        todoList.splice(todo.sno, 1);
        console.log(todoList);
    }

    const todoItemList = todoList.map(todo => <TodoItem key={todo.sno} todo={todo} onDelete={onDelete} />);
    return (
        <div className="container todo flex flex-col flex-ai-c">
            <Search type="text" />
            <div className="todo__list w-100 border-radius">
                { todoItemList }
                <div className="todo__footer flex flex-jc-sb flex-ai-c">
                    <span>5 items left</span>
                    <span className="center">
                        <span>All</span>
                        <span>Active</span>
                        <span>Completed</span>
                    </span>
                    <span>Clear Completed</span>
                </div>
            </div>
        </div>
    );
};