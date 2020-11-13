import React from "react";

const display = (props) => {
  React.useEffect(() => {
    const makeAPICall = async () => {
      try {
        const res = await res.json();
        const formattedData = preparedData(json);
        createChart(formattedData);
      } catch (error) {
        console.log(error);
      }
    };
    makeAPICall();
  });

  const preparedData = (data) => {
    const chartData = {
      labels: [],
      datasets: [{ label: "reviews", data: [] }],
    };
    data.products.forEach((product) => {
      chartData.datasets[0].data.push(product.name);
    });
    return chartData;
  };

  const createChart = (data) => {
    const ctx = document.querySelector("#products");
    const productsChart = new Chart(ctx, {
      type: "line",
      data: data,
    });
  };
  return <div></div>;
};

export default display;
