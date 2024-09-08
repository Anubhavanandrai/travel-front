import { useState } from 'react';
import './classform.css'; // Updated import to match the new CSS filename
import axios from 'axios';
import { working_url } from '../../Base.js';
import { useNavigate } from 'react-router-dom';
import { fileheader } from '../../config.js/configuration';

const ClassForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    tripname: '',
    availableseat: '',
    email: '',
    description: '',
    fee: '',
    file: null,
  });

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({ ...formData, file: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Create a FormData object to handle file uploads
      const data = new FormData();
      data.append('tripname', formData.tripname);
      data.append('availableseat', formData.availableseat);
      data.append('email', formData.email);
      data.append('description', formData.description);
      data.append('fee', formData.fee);
      data.append('file', formData.file); // Add the file to FormData

      // Perform the API request
      const afterimg = await axios.post(
        `${working_url}/class/newclass`,
        data,
        { headers: fileheader() } // Call fileheader() to get the headers
      );

      if (afterimg) {
        alert('Trip Added Successfully');
        navigate('/');
      }
    } catch (err) {
      console.log('FRONTEND:: error in trip addition form: ', err);
    }
  };

  return (
    <div className='udta-firu'>
      <div className="classform-container">
        <h1 className="classform-title">Create New Trip</h1>
        <form onSubmit={handleSubmit} className="classform-form">
          <div className="classform-group">
            <label className="classform-label classform-label-tripname">Trip Name:</label>
            <input
              type="text"
              name="tripname"
              onChange={handleChange}
              className="classform-input"
            />
          </div>
          <div className="classform-group">
            <label className="classform-label classform-label-availableseat">Available Seat:</label>
            <input
              type="number"
              name="availableseat"
              onChange={handleChange}
              className="classform-input"
            />
          </div>
          <div className="classform-group">
            <label className="classform-label classform-label-email">Email:</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="classform-input"
            />
          </div>
          <div className="classform-group">
            <label className="classform-label classform-label-description">Description:</label>
            <textarea
              name="description"
              onChange={handleChange}
              className="classform-textarea"
            />
          </div>
          <div className="classform-group">
            <label className="classform-label classform-label-fee">Fee:</label>
            <input
              type="number"
              name="fee"
              onChange={handleChange}
              className="classform-input"
            />
          </div>
          <div className="classform-group">
            <label className="classform-label classform-label-file">Upload Thumbnail:</label>
            <input
              type="file"
              name="file"
              onChange={handleChange}
              className="classform-fileinput"
            />
          </div>
          <div className="classform-group">
            <button type="submit" className="classform-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClassForm;
