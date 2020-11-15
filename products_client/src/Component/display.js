import React from "react";
import Products from "./products";
import PropTypes from "prop-types";
import axios from "axios";
import { get } from "http";

// const display = (props) => {
//   return <div></div>;
// };

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }
  changeList() {
    axios.get("http://localhost:3000/products").then((response) => {
      const data = response.data;
      this.setState({ datas: data });
    });
  }
  render() {
    return (
      <>
        <Products datas={this.state.datas} />
        <button onClick={this.changeList.bind(this)}>Products</button>
      </>
    );
  }
}

export default Display;
