import React, { useState, Component } from 'react';

import { InputSegment } from './Componet/InputSegment';

type AppState = {
  result: Array<string>
}


class App extends Component<{}, AppState> {
  OnResultChange(result: Array<string>) {
   console.log(result); 
  }

  render(){
      return( 
        <div> 
          <InputSegment OnResultChange={this.OnResultChange}/>
        </div>
      )
  };
}

export default App;
