import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useEffect, useState } from 'react';
import axios from 'axios';

Chart.register(...registerables);

const Graph = () => {
  const [userContribution, setUserContribution] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [dailyWasteData, setDailyWasteData] = useState([]);
  const [loadingWasteData, setLoadingWasteData] = useState(true);
  const [loadingUserPoints, setLoadingUserPoints] = useState(true);

  useEffect(() => {
    const fetchWasteData = async () => {
      try {
        const userId = 1; // Use the actual user ID
        const response = await axios.get(`/api/waste/collected/${userId}`);
        setDailyWasteData(response.data.dailyWasteCollected);
      } catch (error) {
        console.error("Error fetching waste data: ", error);
      } finally {
        setLoadingWasteData(false);
      }
    };
    fetchWasteData();
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

  const cumulativeWasteData = dailyWasteData.reduce((acc, cur, idx) => {
    acc.push((acc[idx - 1] || 0) + cur);
    return acc;
  }, []);

  const eWasteDataChart = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'E-Waste Collected (kg)',
        data: cumulativeWasteData.length ? cumulativeWasteData : Array(7).fill(0),
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
            {cumulativeWasteData.length ? cumulativeWasteData[cumulativeWasteData.length - 1] : 0} kg
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