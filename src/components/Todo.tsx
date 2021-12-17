import React from "react";

interface ITodoProps {
    id: number,
    name: string,
    done: boolean
}

const Todo: React.FC<ITodoProps> = (props) => {
  const { id, name, done } = props;

  return (
    <div className="todo">
      <div>
        <p>Id: {id}</p>
      </div>

      <div>
        <p>{name}</p>
      </div>

      <div>
        <p>Feito: {done ? 'SIM' : 'NÃO'}</p>
      </div>
    </div>
  );
};

export default Todo;
