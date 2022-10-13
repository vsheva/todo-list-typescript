import React from 'react';
import {ITodo} from "./interfaces";

type TodoListProps = {
    todo: ITodo[],

}

export const TodoList: React.FC<TodoListProps> = ({todo}) => {
    return (
        <ul>
            {todo.map((todo) => {

                const classes=["todo"]
                if(todo.completed) {
                    classes.push("completed")
                }

                return (
                    <li className={classes.join(" ")} key={todo.id}>
                        <label>
                            <input type="checkbox" checked={todo.completed}/>
                            <span>{todo.title}</span>
                            <i className="material-icons red-text">delete</i>
                        </label>
                    </li>
                )
            })

            }


        </ul>
    )
}