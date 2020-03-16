import React, { Component } from 'react';

import { InputSegment } from './Componet/InputSegment';

type AppState = {
  math: string[]
}


class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      math: []
    }
  }
  OnResultChange(result: string[]) {
    console.log(result);
    this.setState({math: result});
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
