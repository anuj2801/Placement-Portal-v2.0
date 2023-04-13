const highAvgStat = document.getElementById("myChart").getContext("2d");
  const placementData = [
    ['Year', 'Highest Package (LPA)', 'Average Package (LPA)'],
    ['2017-2018', 10, 3],
    ['2018-2019', 10, 3.4],
    ['2019-2020', 17, 6.2],
    ['2020-2021', 17, 8],
    ['2021-2022', 26.41, 13.54]
  ];
  // console.log(placementData);
  function getDataOfColumn(index) {
    let returnArray = [], i = 0;
    for (let row = 1; row < placementData.length; row++) {
      for (let column = 0; column < placementData[row].length; column++) {
        if (column == index) {
          returnArray[i] = placementData[row][column];
          i++;
        }
      }
    }
    return returnArray;
  }
  ;
  // console.log(getDataOfColumn(1));
  Chart.defaults.font.family = "Teko";
Chart.defaults.font.size = 22;
Chart.defaults.color = "black";
var data = {
  labels: getDataOfColumn(0),
  datasets: [
      {
          label: "Highest package in LPA",
          backgroundColor: "#4DB6AC",
          data: getDataOfColumn(1)
      },
      {
          label: "Average package in LPA",
          backgroundColor:"#F06292" ,
          data: getDataOfColumn(2)
      }
  ]
};

var myBarChart = new Chart(highAvgStat, {
  type: 'bar',
  data: data,
  options: {
      barValueSpacing: 20,
      scales: {
          yAxes: [{
              ticks: {
                  min: 0,
              }
          }]
      }
  }
});
