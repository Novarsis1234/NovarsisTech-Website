import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOurteam, removeOurteam } from 'slice/ourteamSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ListOurteam = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, loading, error } = useSelector((state) => state.team);

  useEffect(() => {
    dispatch(getOurteam());
  }, [dispatch]);

  const handleDelete = async (id) => {
    await dispatch(removeOurteam(id));
    toast.success('Team member deleted');
  };

  return (
    <div className="container-fluid mt-5">
      <div className="mainheadig mx-4">
        <h4 className="text-white font-weight-bold">Team List</h4>
      </div>

      {loading && <p className="text-white mx-4">Loading...</p>}
      {error && <p className="text-danger mx-4">{error}</p>}

      <div className="row mx-4 mt-3">
        {data.length === 0 && !loading && <p>No team members found</p>}

        {data.map((member) => (
          <div className="col-md-4 mb-4" key={member.id}>
            <div className="card">
              {/* ✅ SAME AS BLOG */}
              <img
                src={member.image}
                className="card-img-top"
                alt={member.name}
              />

              <div className="card-body">
                <h5>{member.name}</h5>
                <p>{member.title}</p>

                <button
                  className="btn editbtn mr-2"
                  onClick={() =>
                    navigate(`/ourteam/update/${member.id}`)
                  }
                >
                  Edit
                </button>

                <button
                  className="btn removebtn"
                  onClick={() => handleDelete(member.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListOurteam;
