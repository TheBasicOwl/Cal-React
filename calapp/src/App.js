import React, { useState } from 'react';


function App() {
  return (
    <div>
      <InputSection></InputSection>
    </div>
  );
}

class InputSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ""};
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return ( 
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={e => this.setState({text: e.target.value})}/>
        <button>Submit</button>
        <br/>{this.state.text}
      </form>
    )
  } 
}

export default App;
