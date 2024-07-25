// pages/roi.js

import { useState } from 'react';

// Function to calculate ROI for ERP implementation
const calculateERPROI = (initialCosts, saasSubscription, consultancyCosts, maintenanceCosts, userCosts) => {
  const totalCost = initialCosts + saasSubscription + consultancyCosts + maintenanceCosts + userCosts;
  const expectedReturn = totalCost * 1.72; // 172% of total costs
  const roi = ((expectedReturn - totalCost) / totalCost) * 100;
  return roi;
};

export default function ROIPage() {
  const [initialCosts, setInitialCosts] = useState('');
  const [saasSubscription, setSaasSubscription] = useState('');
  const [consultancyCosts, setConsultancyCosts] = useState('');
  const [maintenanceCosts, setMaintenanceCosts] = useState('');
  const [userCosts, setUserCosts] = useState('');
  const [roi, setRoi] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const roiValue = calculateERPROI(
      parseFloat(initialCosts),
      parseFloat(saasSubscription),
      parseFloat(consultancyCosts),
      parseFloat(maintenanceCosts),
      parseFloat(userCosts)
    );
    setRoi(roiValue);
  };

  return (
    <div>
      <h1>Calculate ERP ROI</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Initial Costs: </label>
          <input
            type="number"
            value={initialCosts}
            onChange={(e) => setInitialCosts(e.target.value)}
            required
          />
        </div>
        <div>
          <label>SaaS Subscription: </label>
          <input
            type="number"
            value={saasSubscription}
            onChange={(e) => setSaasSubscription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Consultancy Costs: </label>
          <input
            type="number"
            value={consultancyCosts}
            onChange={(e) => setConsultancyCosts(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Maintenance Costs: </label>
          <input
            type="number"
            value={maintenanceCosts}
            onChange={(e) => setMaintenanceCosts(e.target.value)}
            required
          />
        </div>
        <div>
          <label>User Costs: </label>
          <input
            type="number"
            value={userCosts}
            onChange={(e) => setUserCosts(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calculate ROI</button>
      </form>
      {roi !== null && (
        <div>
          <h2>ROI: {roi.toFixed(2)}%</h2>
        </div>
      )}
    </div>
  );
}
