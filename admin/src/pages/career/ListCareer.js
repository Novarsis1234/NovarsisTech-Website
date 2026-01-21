import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCareer, removeCareer, updateCareer } from "../../slice/careerSlice";
import AdminTable from "../../common/AdminTable";
import { toast } from "react-toastify";

const ListCareer = () => {
  const dispatch = useDispatch();
  const { data = [], loading, error } = useSelector((state) => state.career);

  const [selectedCareer, setSelectedCareer] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    type: "Full-Time",
    description: ""
  });

  useEffect(() => {
    dispatch(getCareer());
  }, [dispatch]);

  const handleEditClick = (career) => {
    setSelectedCareer(career);
    setFormData({
      title: career.title,
      location: career.location,
      type: career.type,
      description: career.description
    });
    setShowModal(true);
  };

  const handleRemove = async (id) => {
    await dispatch(removeCareer(id));
    toast.success("Career removed successfully");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveChanges = async () => {
    await dispatch(updateCareer({ id: selectedCareer.id, data: formData }));
    toast.success("Career updated successfully");
    setShowModal(false);
  };

  const tableHeaders = [
    { Header: "ID", accessor: "id" },
    { Header: "Title", accessor: "title" },
    { Header: "Location", accessor: "location" },
    { Header: "Type", accessor: "type" },
    { Header: "Description", accessor: "description" },
    {
      Header: "Actions",
      Cell: ({ row }) => (
        <>
          <button className="btn btn-danger btn-sm mx-1" onClick={() => handleRemove(row.original.id)}>
            Remove
          </button>
          <button className="btn btn-primary btn-sm mx-1" onClick={() => handleEditClick(row.original)}>
            Edit
          </button>
        </>
      )
    }
  ];

  return (
    <div className="container-fluid mt-5">
      <div className="mainheadig mx-4">
        <h4 className="text-white font-weight-bold">Career List</h4>
      </div>

      {loading && <p className="text-white mx-4">Loading...</p>}
      {error && <p className="text-danger mx-4">{error}</p>}

      {data.length > 0 && <AdminTable tableHeaders={tableHeaders} tableData={data} />}

      {showModal && (
        <div className="modal fade show d-block">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5>Edit Career</h5>
                <button className="close" onClick={() => setShowModal(false)}>
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <input name="title" className="form-control mb-2" value={formData.title} onChange={handleChange} />
                <input name="location" className="form-control mb-2" value={formData.location} onChange={handleChange} />
                <select name="type" className="form-control mb-2" value={formData.type} onChange={handleChange}>
                  <option>Full-Time</option>
                  <option>Part-Time</option>
                  <option>Internship</option>
                  <option>Remote</option>
                  <option>Contract</option>
                </select>
                <textarea
                  name="description"
                  className="form-control"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Close
                </button>
                <button className="btn btn-primary" onClick={handleSaveChanges}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListCareer;
