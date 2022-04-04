import React, { useState } from "react";
import Search from "../../codexlab/Search/Search";
import { ITodoItem } from "./models/ITodoItem";
import TodoItem from "./TodoItem/TodoItem";
import './Todos.scss';

export const Todos = () => {

    const [todoList, setTodoList] = useState<ITodoItem[]>([
        {
            isCompleted: false,
            title: 'Jog around the park 3x'
        },
        {
            isCompleted: false,
            title: '10 min meditation'
        }, 
        {
            isCompleted: true,
            title: 'Complete Online Javascript Course'
        }
    ]);
 
    // Update the State in a callback function
    const onDelete = (todo: ITodoItem) => {
        setTodoList(
            todoList
            .filter(x => x !== todo)
        );
    }
    const onTodoItem = (_title: string) => {
        setTodoList([
            { isCompleted: false, title: _title },
            ...todoList
        ]);
    }

    function reorderCompletedAndProgressTodoList(todoItemList: ITodoItem[]): JSX.Element[] {
        const completeTodoList = todoItemList
            .filter(todo => todo.isCompleted)
            .map((todo, i) => <TodoItem key={`C:${i}`} todo={todo} onDelete={onDelete} isTextStrike={true} />);
    
        const progressTodoList = todoItemList
            .filter(todo => !todo.isCompleted)
            .map((todo, i) => <TodoItem key={`P:${i}`} todo={todo} onDelete={onDelete} />);
    
        return [...completeTodoList, ...progressTodoList];
    }

    const todoItemList = reorderCompletedAndProgressTodoList(todoList);
    return (
        <div className="container todo flex flex-col flex-ai-c">
            <Search type="text" onSubmit={onTodoItem} />
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