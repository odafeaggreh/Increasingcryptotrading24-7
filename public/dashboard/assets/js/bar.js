new Chart(document.getElementById("barchart"), {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        data: [2, 3, 3, 3, 3, 2, 4, 1],
        label: "Direct Referer",
        backgroundColor: "#4755AB",
        borderWidth: 1
      },
      {
        data: [30, 10, 70, 15, 30, 20, 70, 80],
        label: "Downlink Referer",
        backgroundColor: "#E7EDF6",
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    legend: {
      position: "top"
    }
  }
});
