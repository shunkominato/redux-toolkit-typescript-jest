import React, { useState } from 'react'

const RenderInput = () => {
  const [input, setInput] = useState('');

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }
  
  return (
    <div>
      <input
        type='text'
        placeholder='enter'
        value={input}
        onChange={updateValue}
      />
    </div>
  )
}

export default RenderInput
