const labels = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,2022];
const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [0.75, 1.8, 2, 3.25, 4, 5.16, 5.66, 5.75, 6.25, 8.5, 8.58, 12.66, 31.68],
    fill: false,
    borderColor: 'rgb(250, 0, 127)',
    tension: 0.5
  }]
};

const config = {
    type: 'line',
    data: data,
  };

var myChart = new Chart(
    document.getElementById('data-candice'),
    config
);
