import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Props {
  aa: string;
  output: (text: string) => void;
}

const RenderInput: React.FC<Props> = (props) => {
  const { output } = props;
  const [input, setInput] = useState('');
  const [user, setUser] = useState<any>(null);
  const [username, setUsername] = useState('');
  const [click, setClick] = useState(false);
  const [error, setError] = useState('');

  const fetchJSON = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    return res.data;
  };

  const fetchUser = async () => {
    await axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => {
        const { username } = res.data;
        setUsername(username);
        setClick(true);
      })
      .catch(() => {
        setError('error');
      });
  };

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const outputValue = () => {
    if (input) output(input);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const user = await fetchJSON();
      setUser(user);
    };
    fetchUser();
  }, []);

  const text = click ? 'aaaa' : 'start';

  return (
    <div>
      <input
        type="text"
        placeholder="enter"
        value={input}
        onChange={updateValue}
      />
      <button onClick={outputValue}>clic</button>
      {user ? <p>user{user.name}</p> : null}
      <button onClick={fetchUser} disabled={click} data-testid="click">
        {text}
      </button>
      {username && <h3 data-testid="name">{username}</h3>}
      {error && <p data-testid="error">{error}</p>}
    </div>
  );
};

export default RenderInput;
