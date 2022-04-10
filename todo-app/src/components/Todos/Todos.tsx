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
            isCompleted: false,
            title: 'Complete Online Javascript Course'
        }
    ]);
 
    // Update the State in a callback function
    const deleteTodoItem = (todo: ITodoItem) => {
        setTodoList(
            todoList
            .filter(x => x !== todo)
        );
    };
    const addTodoItem = (_title: string) => {
        setTodoList([
            ...todoList,
            { isCompleted: false, title: _title }
        ]);
    };
    const markCompleted = (todo: ITodoItem) => {
        todo.isCompleted = true;
        setTodoList([
            todo,
            ...todoList.filter(x => x !== todo)
        ])
    }
    const removeCompletedTodoItems = () => {
        setTodoList(todoList.filter(x => !x.isCompleted));
    }

    function reorderCompletedAndProgressTodoList(todoItemList: ITodoItem[]): JSX.Element[] {
        const completeTodoList = todoItemList
            .filter(todo => todo.isCompleted)
            .map((todo, i) => 
                <TodoItem
                key={`C:${i}`}
                todo={todo}
                onDelete={deleteTodoItem}
                markCompleted={() => {}}
                />
            );
    
        const progressTodoList = todoItemList
            .filter(todo => !todo.isCompleted)
            .map((todo, i) => 
                <TodoItem
                    key={`P:${i}`}
                    todo={todo}
                    onDelete={deleteTodoItem}
                    markCompleted={markCompleted}
                />
            );
    
        return [...completeTodoList, ...progressTodoList];
    };

    const todoItemList = reorderCompletedAndProgressTodoList(todoList);
    const emptyTodoTempalte = (
        <div className="emptyTodo flex flex-jc-c flex-ai-c border-radius flex-col">
            <span>Todo Empty</span>
        </div>
    )
    return (
        <div className="container todo flex flex-col flex-ai-c">
            <Search type="text" onSubmit={addTodoItem} />
            <div className="todo__list card-shadow w-100 border-radius">
                { todoItemList.length > 0 ? todoItemList : emptyTodoTempalte }
                <div className="todo__footer flex flex-jc-sb flex-ai-c">
                    <span>
                        { `${ todoList.filter(x => !x.isCompleted).length } items left`}
                    </span>
                    <span className="center footer__center__child">
                        <span>All</span>
                        <span>Active</span>
                        <span>Completed</span>
                    </span>
                    <span className="action-item" onClick={ removeCompletedTodoItems }>Clear Completed</span>
                </div>
            </div>
            <span className="todo__footer__center card-shadow footer__center__child border-radius">
                <span>All</span>
                <span>Active</span>
                <span>Completed</span>
            </span>
        </div>
    );
};