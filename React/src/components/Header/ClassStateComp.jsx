import { Component } from "react";

class StateComp extends Component {
  constructor() {
    super();
    this.state = {
      name: "Vignesh",
      age: 20,
      emailId: "HELLO",
      responseData: [],
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState((prev) => ({ ...prev, responseData: [{}, {}, {}] }));
  }



  componentDidMount(){
    console.log('component did mount')
  }

  componentDidUpdate(){
    console.log('component did update')
  }

  componentWillUnmount(){
    console.log('component will unmount')
  }



  render() {
    console.log(this.state);

    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        <h1>{this.state.emailId}</h1>
        <button onClick={this.updateState}>Change State </button>
      </div>
    );
  }
}

export default StateComp;
