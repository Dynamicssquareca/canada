import { useState } from 'react';

const calculateERPROI = (initialCosts, saasSubscription, consultancyCosts, maintenanceCosts, userCosts) => {
  const totalCost = initialCosts + saasSubscription + consultancyCosts + maintenanceCosts + userCosts;
  const expectedReturn = totalCost * 1.72; // 172% of total costs
  const roi = ((expectedReturn - totalCost) / totalCost) * 100;
  return roi;
};

export default function ROIPage() {
  const [initialCosts, setInitialCosts] = useState(0);
  const [saasSubscription, setSaasSubscription] = useState(0);
  const [consultancyCosts, setConsultancyCosts] = useState(0);
  const [maintenanceCosts, setMaintenanceCosts] = useState(0);
  const [userCosts, setUserCosts] = useState(0);
  const [roi, setRoi] = useState(null);

  const [showDetailsForm, setShowDetailsForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCalculateClick = (e) => {
    e.preventDefault();
    setShowDetailsForm(true);
  };

  const handleDetailsSubmit = (e) => {
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
    <div className="container">
      <h1>Calculate ERP ROI</h1>
      <form onSubmit={handleCalculateClick}>
        <div className="form-group">
          <label>Initial Costs: </label>
          <input
            type="number"
            value={initialCosts}
            onChange={(e) => setInitialCosts(e.target.value)}
            required
          />
          <input
            type="range"
            min="0"
            max="100000"
            value={initialCosts}
            onChange={(e) => setInitialCosts(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>SaaS Subscription: </label>
          <input
            type="number"
            value={saasSubscription}
            onChange={(e) => setSaasSubscription(e.target.value)}
            required
          />
          <input
            type="range"
            min="0"
            max="50000"
            value={saasSubscription}
            onChange={(e) => setSaasSubscription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Consultancy Costs: </label>
          <input
            type="number"
            value={consultancyCosts}
            onChange={(e) => setConsultancyCosts(e.target.value)}
            required
          />
          <input
            type="range"
            min="0"
            max="50000"
            value={consultancyCosts}
            onChange={(e) => setConsultancyCosts(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Maintenance Costs: </label>
          <input
            type="number"
            value={maintenanceCosts}
            onChange={(e) => setMaintenanceCosts(e.target.value)}
            required
          />
          <input
            type="range"
            min="0"
            max="30000"
            value={maintenanceCosts}
            onChange={(e) => setMaintenanceCosts(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>User Costs: </label>
          <input
            type="number"
            value={userCosts}
            onChange={(e) => setUserCosts(e.target.value)}
            required
          />
          <input
            type="range"
            min="0"
            max="100000"
            value={userCosts}
            onChange={(e) => setUserCosts(e.target.value)}
          />
        </div>
        <button type="submit">Calculate ERP ROI</button>
      </form>

      {showDetailsForm && (
        <form onSubmit={handleDetailsSubmit} className="details-form">
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Company Name: </label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number: </label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit Details</button>
        </form>
      )}

      {roi !== null && (
        <div className="result">
          <h2>ROI: {roi.toFixed(2)}%</h2>
        </div>
      )}

      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        h1 {
          text-align: center;
          color: #333;
          margin-bottom: 20px;
        }
        .form-group {
          margin-bottom: 20px;
        }
        label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
          color: #555;
        }
        input[type="number"],
        input[type="text"],
        input[type="email"],
        input[type="tel"] {
          width: calc(100% - 20px);
          padding: 8px 10px;
          border-radius: 4px;
          border: 1px solid #ccc;
          font-size: 16px;
        }
        input[type="range"] {
          width: 100%;
          margin-top: 5px;
        }
        button {
          width: 100%;
          padding: 10px 15px;
          background-color: #0070f3;
          color: #fff;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #005bb5;
        }
        .details-form {
          margin-top: 20px;
        }
        .result {
          margin-top: 20px;
          text-align: center;
        }
        .result h2 {
          color: #0070f3;
        }
      `}</style>
    </div>
  );
}
