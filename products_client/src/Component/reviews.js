import React from "react";
import PropTypes from "prop-types";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const reviews = this.props.datas.map(function (data, i) {
      return (
        <React.Fragment key={i}>
          <div>{data.title}</div>
          <div>{data.content}</div>
          <div>{data.author}</div>
          <div>{data.product_id}</div>
        </React.Fragment>
      );
    });
    return <div>{reviews}</div>;
  }
}

export default Reviews;
