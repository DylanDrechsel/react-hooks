import React from 'react'
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
import useUpdateLogger from './hooks/useUpdateLogger';
import MemoComponent from './hooks/useMemo';
import refComponent from './hooks/useRef';

function App() {
  const [name, setName] = useLocalStorage('name', '')

  useUpdateLogger(name)

  return (
    <div className="App">

      {/* useMeno */}
        {/* <MemoComponent /> */}

      {/* useRef */}
        <refComponent />


      {/* CODE FOR useLocalStorage */}
      {/* <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)} /> */}

        
    </div>
  );
}

export default App;
