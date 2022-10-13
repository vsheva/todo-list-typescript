import React, {useState} from 'react';
import {Navbar} from "./components/Navbar";
import {TodoForm} from "./components/TodoForm";
import {TodoList} from "./components/TodoList";
import {ITodo} from "./components/interfaces";

const App: React.FC = () => {
    const [todo, setTodo] = useState<ITodo[]>([]);

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title,
            id: Date.now(),
            completed: false,
        }
        //setTodo([newTodo, ...todo])
        setTodo(prev => [newTodo, ...prev])
    }

    const toggleHandler = (id:number) => {

    }

    const removeHandler = (id:number) => {

    }


    return (<>
        <Navbar/>
        <div className="container">
            <TodoForm onAdd={addHandler}/>
            <TodoList todo={todo}/>
        </div>

    </>)
}

export default App
