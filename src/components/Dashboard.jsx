import React from 'react';
import "../styles/dashboard.css";
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='dashboard-main'>
      <button>
        <Link to="/dishvoting">Vote</Link>
      </button>
      <button>
        <Link to="/result">Result</Link>
      </button>
    </div>
  )
}

export default Dashboard