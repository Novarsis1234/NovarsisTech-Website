import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRequest, patchRequest } from '../../apis/ApiInstence';
import { toast } from 'react-toastify';

const UpdateOurteam = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    title: '',
    image: null,
    existingImage: '',
  });

  /* ================= FETCH TEAM MEMBER ================= */
  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await getRequest(`team/${id}`);
        const team = res.data.data;

        setFormData({
          name: team.name || '',
          title: team.title || '',
          image: null,
          existingImage: team.image || '',
        });
      } catch (error) {
        toast.error('Failed to load team member');
      }
    };

    fetchTeam();
  }, [id]);

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: name === 'image' ? files[0] : value,
    });
  };

  /* ================= UPDATE TEAM ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append('name', formData.name);
    fd.append('title', formData.title);

    if (formData.image) {
      fd.append('image', formData.image);
    }

    try {
      await patchRequest(`team/${id}`, fd, true);
      toast.success('Team member updated successfully');
      navigate('/ourteam');
    } catch (error) {
      toast.error(
        error?.response?.data?.message || 'Update failed',
      );
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Update Team Member</h3>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          className="form-control mb-2"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />

        <input
          className="form-control mb-2"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />

        <input
          type="file"
          className="form-control mb-2"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />

        {(formData.image || formData.existingImage) && (
          <img
            src={
              formData.image
                ? URL.createObjectURL(formData.image)
                : formData.existingImage
            }
            width="180"
            alt="preview"
            className="mt-2 rounded"
          />
        )}

        <button className="btn btn-primary mt-3">
          Update Team Member
        </button>
      </form>
    </div>
  );
};

export default UpdateOurteam;
