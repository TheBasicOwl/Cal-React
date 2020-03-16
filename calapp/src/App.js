import React from 'react';


class App extends React.Component {
  handletest(text) {
    console.log("App:" + text);
  }
  
  render() {
    return (
      <div>
      <InputSection OnSetTest={this.handletest}></InputSection>
    </div>
    );
  }
}

class InputSection extends React.Component {
  state = {
    test: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.OnSetTest(this.state.test);
  };
  
  change = e => {
   console.log(e.target.name);
   this.setState({
     [e.target.name]: e.target.value
   })
  };

  render() {
    return ( 
      <form onSubmit={this.handleSubmit}>
        <input type="text" 
          name="test"
          value={this.state.text} 
          onChange={e => this.change(e)}
        />
        <button>Submit</button>
      </form>
    )
  } 
}

export default App;
