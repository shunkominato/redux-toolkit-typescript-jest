import React from 'react';

type obj = {
  id: string;
  name: string;
};

interface Props {
  frame: Array<obj>;
}

const List: React.FC<Props> = (props) => {
  if (!props.frame.length) return <h1>no data</h1>;

  return (
    <div>
      <ul>
        {props.frame.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
