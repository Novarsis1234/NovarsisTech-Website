import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCareer } from '../../slice/careerSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddCareer = () => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    type: 'Full-Time',
    description: ''
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.career);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await dispatch(addCareer(formData));

    if (res.meta.requestStatus === 'fulfilled') {
      toast.success('Career added successfully!');
      navigate('/careers/list');
    } else {
      toast.error('Failed to add career');
    }
  };

  return (
    <div className="container-fluid mt-5">
      <div className="mainheadig mx-4 mb-4">
        <h4 className="text-white font-weight-bold">Add Career</h4>
      </div>

      <form onSubmit={handleSubmit} className="mx-4">
        {/* Title */}
        <div className="form-group mt-3">
          <label htmlFor="title" className="adminlables">
            Title
          </label>
          <input id="title" name="title" className="form-control" value={formData.title} onChange={handleChange} required />
        </div>

        {/* Location */}
        <div className="form-group mt-3">
          <label htmlFor="location" className="adminlables">
            Location
          </label>
          <input id="location" name="location" className="form-control" value={formData.location} onChange={handleChange} required />
        </div>

        {/* Type */}
        <div className="form-group mt-3">
          <label htmlFor="type" className="adminlables">
            Type
          </label>
          <select id="type" name="type" className="form-control" value={formData.type} onChange={handleChange}>
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Internship</option>
            <option>Remote</option>
            <option>Contract</option>
          </select>
        </div>

        {/* Description */}
        <div className="form-group mt-3">
          <label htmlFor="description" className="adminlables">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="text-right mt-4">
          <button className="btn btn-lg addbtn" disabled={loading}>
            {loading ? 'Adding...' : 'Add Career'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCareer;
