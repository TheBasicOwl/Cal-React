import React, { useState } from 'react';

import { InputSegment } from './Componet/InputSegment';

import './style.css'

const App: React.FC = () => {
  var [math, setmath] = useState<string[]>([]);

  return (
    <div> 
      <InputSegment OnResultChange={e =>{
          console.log(e);
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

/*
class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);

    this.state = { math: [] }; 
  }

  OnResultChange = (result: string[]) => {
    this.setState({math: result});
  }

  render(){
      return( 
        <div> 
          <InputSegment OnResultChange={this.OnResultChange}/>
          <ul>
            {this.state.math.map((m, i) => 
              <ul key={i}>{m}</ul>
            )}
          </ul>
        </div>
      )
  };
}
*/
export default App;
