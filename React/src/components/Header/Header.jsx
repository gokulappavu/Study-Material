import { Component } from "react";

export const Header = () => {
  return <h1>Header</h1>;
};

export const Header2 = () => {
  return <h1>Header 2</h1>;
};

export const Header3 = () => {
  return <Header2/>;
};

class Header1 extends Component {
  render() {
    return <h1>Header 1</h1>;
  }
}

export default Header1;
