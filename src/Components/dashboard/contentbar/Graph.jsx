// components/MyGraphs.js  
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useEffect, useState } from 'react';

// Register necessary components
Chart.register(...registerables);

const Graph = () => {
  const [userContribution, setUserContribution] = useState(0); // State for user contribution

  // Sample data for daily waste collected (in kg) and user contributions
  const wasteData = [10, 15, 20, 25, 18, 28, 32]; // Example daily waste collection in kg
  const userContributions = [5, 10, 15, 20, 25, 30, 35]; // Example daily user contribution points

  const wasteDataChart = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'], // Add labels for better visualization
    datasets: [
      {
        label: 'E-Waste Collected (kg)',
        data: wasteData,
        backgroundColor: 'rgba(75, 122, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        borderRadius: 10, // Adds rounded edges to bars
      },
    ],
  };

  const contributionChart = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'], // Same labels for daily contributions
    datasets: [
      {
        label: 'Your Contributions (points)',
        data: userContributions,
        backgroundColor: 'rgba(126, 102, 156)',
        borderColor: 'rgba(200, 168, 200, 1)',
        borderWidth: 1,
        borderRadius: 10, // Adds rounded edges to bars
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

  useEffect(() => {
    setUserContribution(200); // Example user contribution points (this could come from an API)
  }, []);

  return (
      <div className="flex space-x-12 p-6">
        <div className="flex-1 p-4 bg-customWhite w-80 shadow-md flex flex-col items-baseline rounded-2xl">
          <h2 className="text-lg font-extralight">E-Waste Collected</h2>
          <h3 className="text-lg font-semibold mt-4">{wasteData.reduce((acc, val) => acc + val, 0)} kg</h3>
          <Bar data={wasteDataChart} options={options}/>
        </div>

        <div className="flex-1 p-4 bg-customWhite w-80 shadow-md flex flex-col items-baseline rounded-2xl">
          <h2 className="text-lg font-extralight">User Contribution </h2>
          <h3 className="text-lg font-semibold mt-5">{userContributions.reduce((acc, val) => acc + val, 0)} points</h3>
          <Bar data={contributionChart} options={options}/>
        </div>
      </div>
  );
};

export default Graph;