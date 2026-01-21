import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlog, removeBlog } from "../../slice/blogSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ListBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, loading, error } = useSelector((state) => state.blog);

  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    dispatch(getBlog());
  }, [dispatch]);

  const handleDelete = async (id) => {
    await dispatch(removeBlog(id));
    toast.success("Blog deleted");
  };

  const toggleContent = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="container-fluid mt-5">
      <div className="mainheadig mx-4">
        <h4 className="text-white font-weight-bold">Blog List</h4>
      </div>

      {loading && <p className="text-white mx-4">Loading...</p>}
      {error && <p className="text-danger mx-4">{error}</p>}

      <div className="row mx-4 mt-3">
        {data.length === 0 && !loading && <p>No blogs found</p>}

        {data.map((blog) => (
          <div className="col-12 col-md-6 mb-4" key={blog.id}>
            <div className="card h-100">
              <img
                src={blog.image}
                className="card-img-top"
                alt={blog.title}
                style={{ height: "250px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5>{blog.title}</h5>
                <p>{blog.description}</p>

                {/* BLOG CONTENT */}
                <p
                  className={
                    expandedId === blog.id ? "" : "line-clamp-4"
                  }
                >
                  {blog.content}
                </p>

                {/* VIEW MORE / LESS */}
                {blog.content?.length > 150 && (
                  <button
                    className="btn btn-link p-0"
                    onClick={() => toggleContent(blog.id)}
                  >
                    {expandedId === blog.id
                      ? "View Less"
                      : "View More"}
                  </button>
                )}

                <br />
                <small>{blog.date}</small>

                <div className="mt-3">
                  <button
                    className="btn editbtn mr-2"
                    onClick={() =>
                      navigate(`/blogs/update/${blog.id}`)
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="btn removebtn"
                    onClick={() =>
                      handleDelete(blog.id)
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListBlog;
