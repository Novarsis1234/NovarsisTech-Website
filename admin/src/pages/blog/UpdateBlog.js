import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRequest, patchRequest } from '../../apis/ApiInstence';
import { toast } from 'react-toastify';

const UpdateBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    date: '',
    image: null,
    existingImage: ''
  });

  /* ================= FETCH BLOG ================= */
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await getRequest(`blog/${id}`);
        const blog = res.data.data;

        setFormData({
          title: blog.title || '',
          description: blog.description || '',
          content: blog.content || '',
          date: blog.date ? blog.date.slice(0, 10) : '',
          image: null,
          existingImage: blog.image || ''
        });
      } catch (err) {
        toast.error('Failed to load blog');
      }
    };

    fetchBlog();
  }, [id]);

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: name === 'image' ? files[0] : value
    });
  };

  /* ================= UPDATE BLOG ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append('title', formData.title);
    fd.append('description', formData.description);
    fd.append('content', formData.content);
    fd.append('date', formData.date);

    if (formData.image) {
      fd.append('image', formData.image);
    }

    try {
      await patchRequest(`blog/${id}`, fd, true);
      toast.success('Blog updated successfully');
      navigate('/blogs/list');
    } catch (err) {
      toast.error(err?.response?.data?.message || 'Update failed');
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Update Blog</h3>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input className="form-control mb-2" name="title" value={formData.title} onChange={handleChange} required />

        <textarea className="form-control mb-2" rows="3" name="description" value={formData.description} onChange={handleChange} required />

        <textarea className="form-control mb-2" rows="6" name="content" value={formData.content} onChange={handleChange} required />

        <input type="date" className="form-control mb-2" name="date" value={formData.date} onChange={handleChange} required />

        <input type="file" className="form-control mb-2" name="image" accept="image/*" onChange={handleChange} />

        {(formData.image || formData.existingImage) && (
          <img
            src={formData.image ? URL.createObjectURL(formData.image) : formData.existingImage}
            width="180"
            alt="preview"
            className="mt-2 rounded"
          />
        )}

        <button className="btn btn-primary mt-3">Update Blog</button>
      </form>
    </div>
  );
};

export default UpdateBlog;
