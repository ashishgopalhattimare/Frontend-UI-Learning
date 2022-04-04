import React from "react";
import './TodoItem.scss';

type TodoItemProps = {
    sno: number;
    title: string;
};

const TodoItem = (props: {
    todo: TodoItemProps,
    onDelete: (todo: TodoItemProps) => any
}) => {
    const todo = props.todo;

    const executeOnDelete = () => {
        props.onDelete(todo);
    }

    return (
        <div className="todo-item flex flex-row flex-ai-c flex-jc-sb">
            <div className="flex flex-row flex-ai-c">
                <div className="radio-button"></div>
                <span className="title">{todo.title}</span>
            </div>
            {/* Triggers only which then button is clicked and is not invoked onload */}
            <span className="delete-btn" onClick={ executeOnDelete }>
                <img src="assets/icon-cross.svg" alt="cross"/>
            </span>

            {/* This executes the method onload and does not work when clicked */}
            {/* <button className="btn btn-sm btn-danger" onClick={ props.onDelete(todo) }>DELETE</button> */}
        </div>
    );
}

export default TodoItem;