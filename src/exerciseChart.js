const Chart = require("chart.js");
import { useIndexedDb } from "./indexedDb";

const ctx = document.getElementById("myChart").getContext("2d");
export const exerciseChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [],
    datasets: [
      {
        label: "Calories burnt per exercise",
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    title: {
      text: "Exercises Chart"
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});

export function updateChart(exerciseChart, name, calories) {
  exerciseChart.data.labels.push(name);
  exerciseChart.data.datasets.forEach(dataset => {
    dataset.data.push(calories);
  });
  exerciseChart.update();
}

export function resetChart(exerciseChart) {
  exerciseChart.data.labels = [];
  exerciseChart.data.datasets.forEach(dataset => {
    dataset.data = [];
  });
  exerciseChart.update();
}

useIndexedDb("exercise", "exerciseStore", "get").then(results => {
  results.forEach(exercise => {
    updateChart(exercisesChart, exercise.name, exercise.value);
  });
});
