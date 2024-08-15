import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useEffect, useState } from 'react';
import axios from 'axios';

Chart.register(...registerables);

const Graph = () => {
  const [userContribution, setUserContribution] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [accumulatedWaste, setAccumulatedWaste] = useState(0); // State for accumulated waste
  const [loadingWasteData, setLoadingWasteData] = useState(true);
  const [loadingUserPoints, setLoadingUserPoints] = useState(true);

  useEffect(() => {
    const fetchAccumulatedWaste = async () => {
      try {
        const userId = localStorage.getItem('userId');
        if (!userId) {
          throw new Error("User ID not found. Please log in.");
        }

        const response = await axios.get(`http://localhost:8080/api/v1/user/totalWeight/${userId}`);

        setAccumulatedWaste(response.data.weight);
      } catch (error) {
        console.error("Error fetching accumulated waste data: ", error);
      } finally {
        setLoadingWasteData(false);
      }
    };
    fetchAccumulatedWaste();
  }, []);

  useEffect(() => {
    const fetchUserPoints = async () => {
      try {
        const userId = 1; // Replace with the actual user ID
        const response = await axios.get(`/api/points/${userId}`);
        setTotalPoints(response.data.totalPoints);
      } catch (error) {
        console.error("Error fetching user points: ", error);
      } finally {
        setLoadingUserPoints(false);
      }
    };
    fetchUserPoints();
  }, []);

  const eWasteDataChart = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'E-Waste Collected (kg)',
        data: Array(7).fill(accumulatedWaste), // Display the accumulated waste
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
      <div className="flex space-x-12 p-6">
        <div className="flex-1 p-4 bg-customWhite w-80 shadow-md flex flex-col items-baseline rounded-2xl">
          <h2 className="text-lg font-extralight">E-Waste Collected</h2>
          <h3 className="text-lg font-semibold mt-4">
            {accumulatedWaste} kg
          </h3>
          {loadingWasteData ? (
              <p>Loading...</p>
          ) : (
              <Bar data={eWasteDataChart} options={options} />
          )}
        </div>

        <div className="flex-1 p-4 bg-customWhite w-80 shadow-md flex flex-col items-baseline rounded-2xl">
          <h2 className="text-lg font-extralight">User Contribution</h2>
          <h3 className="text-lg font-semibold mt-5">{totalPoints} points</h3>
          {loadingUserPoints ? (
              <p>Loading...</p>
          ) : (
              <Bar data={contributionChart} options={options} />
          )}
        </div>
      </div>
  );
};

export default Graph;
