import React from 'react'
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
import useUpdateLogger from './hooks/useUpdateLogger';
import ToggleComponent from './hooks/useToggle/ToggleComponent';
import TimeoutComponent from './hooks/useTimeout/TimeoutComponent';
import MemoComponent from './hooks/useMemo';
import RefComponent from './hooks/useRef';
import UseScript from './hooks/UseScript';
import UseDeepCompareEffect from './hooks/UseDeepCompareEffect';
import UseEventListener from './hooks/UseEventListener';
import UseOnScreen from './hooks/UseOnScreen';
import UseWindowSize from './hooks/UseWindowSize';

function App() {
  const [name, setName] = useLocalStorage('name', '')
  useUpdateLogger(name)

  return (
    <div className="App">

      {/* useMeno */}
        {/* <MemoComponent /> */}

      {/* useRef */}
        {/* <RefComponent /> */}


      {/* CODE FOR useLocalStorage */}
      {/* <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)} /> */}

      {/* useToggle */}
        {/* <ToggleComponent /> */}

      {/* useTimeout */}
        <TimeoutComponent />
    </div>
  );
}

export default App;
