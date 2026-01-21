import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const UpdateCareer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BACKEND_URL;

  const [formData, setFormData] = useState({
    title: '',
    location: '',
    type: 'Full-Time',
    description: ''
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/career/${id}`).then((res) => {
      const d = res.data.data;

      setFormData({
        title: d.title,
        location: d.location,
        type: d.type,
        description: d.description
      });
    });
  }, [id, BASE_URL]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.patch(`${BASE_URL}/career/${id}`, formData);
    toast.success('Career updated successfully');
    navigate('/careers/list');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Update Career</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" className="form-control" value={formData.title} onChange={handleChange} />

        <input name="location" className="form-control" value={formData.location} onChange={handleChange} />

        <select name="type" className="form-control" value={formData.type} onChange={handleChange}>
          <option>Full-Time</option>
          <option>Part-Time</option>
          <option>Internship</option>
          <option>Remote</option>
          <option>Contract</option>
        </select>

        <textarea name="description" className="form-control" rows="4" value={formData.description} onChange={handleChange} />

        <div className="text-center">
          <button className="btn btn-primary px-5">Update Career</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCareer;
