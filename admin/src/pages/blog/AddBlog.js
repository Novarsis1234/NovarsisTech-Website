import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBlog } from '../../slice/blogSlice';
import { toast } from 'react-toastify';

const AddBlog = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.blog);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    date: '',
    image: null,
  });

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: name === 'image' ? files[0] : value,
    });
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.image) {
      toast.error('Image is required');
      return;
    }

    const fd = new FormData();
    fd.append('title', formData.title);
    fd.append('description', formData.description);
    fd.append('content', formData.content);
    fd.append('date', formData.date);
    fd.append('image', formData.image);

    dispatch(addBlog(fd));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div className="container-fluid mt-5">
      <div className="mainheadig mx-4">
        <h4 className="text-white font-weight-bold">
          Add Blog
        </h4>
      </div>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="row mx-4">
          <div className="col-sm-12 mt-3">
            <label htmlFor="title" className="adminlables">
              Title
            </label>
            <input
              id="title"
              name="title"
              className="form-control"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-sm-12 mt-3">
            <label
              htmlFor="description"
              className="adminlables"
            >
              Short Description
            </label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-sm-12 mt-3">
            <label htmlFor="content" className="adminlables">
              Full Content
            </label>
            <textarea
              id="content"
              name="content"
              className="form-control"
              rows="5"
              value={formData.content}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-sm-12 mt-3">
            <label htmlFor="date" className="adminlables">
              Date
            </label>
            <input
              id="date"
              type="date"
              name="date"
              className="form-control"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-sm-12 mt-3">
            <label htmlFor="image" className="adminlables">
              Image
            </label>
            <input
              id="image"
              type="file"
              name="image"
              className="form-control"
              accept="image/*"
              onChange={handleChange}
              required
            />
          </div>

          {formData.image && (
            <div className="col-sm-12 mt-3">
              <img
                src={URL.createObjectURL(formData.image)}
                width="150"
                alt="Preview"
                className="rounded"
              />
            </div>
          )}
        </div>

        <div className="mt-4 text-right mx-4">
          <button
            className="btn btn-lg addbtn"
            disabled={loading}
          >
            {loading ? 'Adding...' : 'Add Blog'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
