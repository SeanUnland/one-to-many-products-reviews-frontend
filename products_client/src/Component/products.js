import React from "react";
import PropTypes from "prop-types";

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
          <img src={data.img} alt="product images"></img>
        </React.Fragment>
      );
    });
    return <div>{products}</div>;
  }
}

export default Products;
