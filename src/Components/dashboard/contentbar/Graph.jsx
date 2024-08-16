import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useEffect, useState } from 'react';

Chart.register(...registerables);

const Graph = () => {
  const [userContribution, setUserContribution] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [accumulatedWaste, setAccumulatedWaste] = useState(0);

  useEffect(() => {
    const fetchLocalData = () => {
      // Fetch accumulated waste from localStorage
      const weight = localStorage.getItem('wasteQuantity');
      const weightNumber = parseFloat(weight) || 0;
      setAccumulatedWaste(weightNumber);

      // Fetch accumulated points from localStorage
      const points = localStorage.getItem('userPoints');
      const pointsNumber = parseFloat(points) || 0;
      setTotalPoints(pointsNumber);

      // For demonstration purposes, assume contributions are daily points over the last 7 days
      const pointsArray = Array(7).fill(pointsNumber / 7); // Divide points evenly across 7 days
      setUserContribution(pointsArray);
    };

    fetchLocalData();
  }, []);

  const eWasteDataChart = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'E-Waste Collected (kg)',
        data: Array(7).fill(accumulatedWaste),
        backgroundColor: 'rgba(75, 122, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const contributionChart = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'Your Contributions (points)',
        data: userContribution,
        backgroundColor: 'rgba(126, 102, 156)',
        borderColor: 'rgba(200, 168, 200, 1)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Value',
        },
      },
    },
  };

  return (
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 p-6">
        <div className="flex-1 p-4 bg-customWhite w-full md:w-80 shadow-md flex flex-col items-start rounded-2xl">
          <h2 className="text-lg font-extralight">E-Waste Collected</h2>
          <h3 className="text-lg font-semibold mt-4">{accumulatedWaste} kg</h3>
          <Bar data={eWasteDataChart} options={options} />
        </div>

        <div className="flex-1 p-4 bg-customWhite w-full md:w-80 shadow-md flex flex-col items-start rounded-2xl">
          <h2 className="text-lg font-extralight">User Contribution</h2>
          <h3 className="text-lg font-semibold mt-5">{totalPoints} points</h3>
          <Bar data={contributionChart} options={options} />
        </div>
      </div>
  );
};

export default Graph;
