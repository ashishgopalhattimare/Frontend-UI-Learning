import React from "react";
import { ITodoItem } from "../models/ITodoItem";
import './TodoItem.scss';

const TodoItem = (props: {
    todo: ITodoItem,
    onDelete: (todo: ITodoItem) => void,
    markCompleted: (todo: ITodoItem) => void,
}) => {
    const todo = props.todo;

    const executeOnDelete = () => {
        props.onDelete(todo);
    }
    const markCompleted = () => {
        props.markCompleted(props.todo);
    }

    return (
        <div className="todo-item flex flex-row flex-ai-c flex-jc-sb border-radius">
            <div className="flex flex-row flex-ai-c">
                <div className="radio-button" onClick={ markCompleted }></div>
                <span className={`title ${props.todo.isCompleted ? 'strike-through' : ''}`}>
                    {todo.title}
                </span>
            </div>
            {/* Triggers only which then button is clicked and is not invoked onload */}
            <span className="delete-btn" onClick={ executeOnDelete }>
                <img src="assets/icon-cross.svg" alt="cross"/>
            </span>

            {/* This executes the method onload and does not work when clicked */}
            {/* <button className="btn btn-sm btn-danger" onClick={ props.onDelete(todo) }>DELETE</button> */}
        </div>
    );
};

export default TodoItem;