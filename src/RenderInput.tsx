import React, { useState } from 'react';

interface Props {
  aa: string;
  output: (text: string) => void;
}

const RenderInput: React.FC<Props> = (props) => {
  const { output } = props;
  const [input, setInput] = useState('');

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const outputValue = () => {
    if (input) output(input);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="enter"
        value={input}
        onChange={updateValue}
      />
      <button onClick={outputValue}>clic</button>
    </div>
  );
};

export default RenderInput;
