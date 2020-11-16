import React from "react";
import Products from "./products";
import Reviews from "./reviews";
import { Route } from "react-router-dom";
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

  changeReview() {
    axios.get("http://localhost:3000/products/1/reviews").then((response) => {
      const dataReview = response.data;
      this.setState({ datas: dataReview });
    });
  }

  render() {
    return (
      <>
        <Route path="/">
          <Products datas={this.state.datas} />
          <button onClick={this.changeList.bind(this)}>Products</button>
        </Route>
        <Route path="/reviews">
          <Reviews datas={this.state.datas} />
          <button onClick={this.changeList.bind(this)}>Reviews</button>
        </Route>
      </>
    );
  }
}

export default Display;
