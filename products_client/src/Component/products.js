import React from "react";
import Reviews from "./reviews";
import axios from "axios";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";

// const products = (props) => {
//   return <div></div>;
// };

class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const products = this.props.datas.map(function (data, i) {
      return (
        <React.Fragment key={i}>
          <div>{data.name}</div>
          <div>{data.price}</div>
          <Link to="/reviews">
            <img src={data.img} alt="product images"></img>
          </Link>
        </React.Fragment>
      );
    });
    return <div>{products}</div>;
  }
}

export default Products;
