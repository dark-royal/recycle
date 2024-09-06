import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useEffect, useState } from 'react';

Chart.register(...registerables);

const Graph = () => {
  const [userContribution, setUserContribution] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [accumulatedWaste, setAccumulatedWaste] = useState(0);
  const [wasteArray, setWasteArray] = useState([]); // Initialize state for wasteArray
  const days = 7;

  const getDayKey = (daysAgo = 0) => {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date.toISOString().split('T')[0]; // YYYY-MM-DD format
  };

  const fetchLocalData = () => {
    let pointsArray = [];
    let wasteArray = []; // Local variable for wasteArray
    let totalPoints = 0;
    let totalWaste = 0;

    for (let i = days - 1; i >= 0; i--) {
      const dayKey = getDayKey(i);
      const dailyPoints = parseFloat(localStorage.getItem(`${dayKey}_points`)) || 0;
      const dailyWaste = parseFloat(localStorage.getItem(`${dayKey}_wasteQuantity`)) || 0;

      pointsArray.push(dailyPoints);
      wasteArray.push(dailyWaste); // Push dailyWaste to local wasteArray

      totalPoints += dailyPoints;
      totalWaste += dailyWaste;
    }

    // Reverse the arrays to display Day 7 to Day 1
    setUserContribution(pointsArray);
    setWasteArray(wasteArray); // Update state with reversed wasteArray
    setAccumulatedWaste(totalWaste);
    setTotalPoints(totalPoints);
    localStorage.setItem('totalPoints', totalPoints.toString());

  };

  const storeUserData = (weight, points) => {
    const dayKey = getDayKey();
    const existingWeight = parseFloat(localStorage.getItem(`${dayKey}_wasteQuantity`)) || 0;
    const existingPoints = parseFloat(localStorage.getItem(`${dayKey}_points`)) || 0;

    localStorage.setItem(`${dayKey}_wasteQuantity`, (existingWeight + weight).toString());
    localStorage.setItem(`${dayKey}_points`, (existingPoints + points).toString());

    fetchLocalData(); // Update the graph with new data
  };

  useEffect(() => {
    fetchLocalData();
  }, []);

  const eWasteDataChart = {
    labels: Array.from({ length: days }, (_, i) => `Day ${days - i}`), // Reversed labels
    datasets: [
      {
        label: 'E-Waste Collected (kg)',
        data: wasteArray, // Reversed data
        backgroundColor: 'rgba(75, 122, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const contributionChart = {
    labels: Array.from({ length: days }, (_, i) => `Day ${days - i}`), // Reversed labels
    datasets: [
      {
        label: 'Your Contributions (points)',
        data: userContribution, // Reversed data
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
          <h3 className="text-lg font-semibold mt-4">{(accumulatedWaste / days).toFixed(2)} kg (Average)</h3>
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
