import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { ITodo } from './interfaces';

export const TodoPage: React.FC = () => {
  const [todo, setTodo] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todo') || '[]') as ITodo[];
    setTodo(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false,
    };

    setTodo(prev => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodo(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    );
  };

  const removeHandler = (id: number) => {
    const shouldRemove = window.confirm('Are you sure you want to delete ?');
    if (shouldRemove) {
      setTodo(prev => prev.filter(todo => todo.id !== id));
    }
  };

  return (
    <React.Fragment>
      <TodoForm onAdd={addHandler} />

      <TodoList todo={todo} onToggle={toggleHandler} onRemove={removeHandler} />
    </React.Fragment>
  );
};
