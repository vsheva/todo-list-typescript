import React, { useRef } from 'react';

interface TodoFormProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<TodoFormProps> = props => {
  const ref = useRef<HTMLInputElement>(null);

  /*  const [title,setTitle]= useState <string>("")
      const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
          setTitle(e.target.value);
      }*/
  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(ref.current!.value);
      ref.current!.value = '';
      /* setTitle("")*/
    }
  };

  return (
    <div className="input-field mt2">
      <input
        /* value={title}
                 onChange={onChangeHandler}*/
        ref={ref}
        type="text"
        id="title"
        placeholder="Enter the title"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Enter the task
      </label>
    </div>
  );
};
