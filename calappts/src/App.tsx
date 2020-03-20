import React, { useState } from 'react';

import { InputSegment } from './Componet/InputSegment';

import './style.css'

const App: React.FC = () => {
  var [math, setmath] = useState<string[]>([]);

  //Calulations
  return (
    <div> 
      <InputSegment OnResultChange={e =>{
          setmath(e);
        }}/>
      <ul id="result">
        {math.map((m, i) => 
          <li key={i}>{m}</li>
        )}
      </ul>
    </div>
  )
}

export default App;
