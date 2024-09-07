import { useState, useEffect } from 'react';
import './myclass.css';
import axios from 'axios';
import { headers } from '../../config.js/configuration.js';

function Mine() {
    
  const [status, setStatus] = useState('Accepted');
  const [data, setData] = useState({});



  const fetchData = async (currentStatus) => {
    try {
      let url = '';
      if (currentStatus === 'Accepted') {
        url = 'http://localhost:8000/class/user-approved-class';
      } else if (currentStatus === 'Rejected') {
        url = 'http://localhost:8000/class/user-rejected-class';
      } else {
        return;
      }
      console.log(`Fetching data for status: ${currentStatus}`);
      
      const response = await axios.get(url, { headers:headers() });
      if (response.status === 200) {
        console.log(`Data fetched:`, response.data);
        setData(response.data);
      } else {
        console.error(`Error fetching ${currentStatus} data:`, response.statusText);
      }
    } catch (error) {
      console.error(`Error fetching ${currentStatus} data:`, error);
    }
  };

  useEffect(() => {
    console.log('useEffect triggered');
    fetchData(status);
  }, [status]);

  const handleStatusChange = (stat) => {
    if (status !== stat) {
      setStatus(stat);
    }
  };
console.log(data )

  return (
    <div className="myclass-container">
      <div className="myclass-buttons">
        <button onClick={() => handleStatusChange('Accepted')} className="myclass-accepted">
          Accepted
        </button>
        <button onClick={() => handleStatusChange('Rejected')} className="myclass-rejected">
          Rejected
        </button>
      </div>
      <div className="myclass-status-info">
        {data.length > 0 ? (
          <>
            {status === 'Accepted' && (
              <div className="myclass-accepted-info">
                {data.map((item) => (
                  <div key={item._id} className="accepted-item">
                    <img src={item.file} alt={item.tripname} className="accepted-item-img" />
                    <div className="accepted-item-details">
                      <h3 className="accepted-item-title">{item.tripname}</h3>
                      <p className="accepted-item-description">{item.description}</p>
                      <p className="accepted-item-fee">Fee: ${item.fee}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {status === 'Rejected' && (
              <div className="myclass-rejected-info">
                {data.map((item) => (
                  <div key={item._id} className="rejected-item">
                    <img src={item.file} alt={item.tripname} className="rejected-item-img" />
                    <div className="rejected-item-details">
                      <h3 className="rejected-item-title">{item.tripname}</h3>
                      <p className="rejected-item-description">{item.description}</p>
                      <p className="rejected-item-fee">Fee: ${item.fee}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
}

export default Mine;
