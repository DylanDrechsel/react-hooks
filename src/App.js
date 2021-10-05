import React from 'react'
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
import useUpdateLogger from './hooks/useUpdateLogger';

function App() {
  const [name, setName] = useLocalStorage('name', '')

  useUpdateLogger(name)

  return (
    <div className="App">
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)} />
    </div>
  );
}

export default App;
