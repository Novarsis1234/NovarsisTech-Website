import { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  getContactUs,
  removeContactUs,
} from '../slice/contactUsSlice';
import AdminTable from 'common/AdminTable';
import TruncatedMessage from 'common/TruncatedMessage';

/* =========================
   Message Cell Component
========================= */
const MessageCell = ({ row }) => (
  <TruncatedMessage
    text={row?.original?.message || ''}
    maxLength={10}
  />
);

MessageCell.propTypes = {
  row: PropTypes.shape({
    original: PropTypes.shape({
      message: PropTypes.string,
    }),
  }).isRequired,
};

/* =========================
   Remove Button Component
========================= */
const RemoveButton = ({ row }) => {
  const dispatch = useDispatch();

  const handleRemove = useCallback(() => {
    if (row?.original?.id) {
      dispatch(removeContactUs(row.original.id));
    }
  }, [dispatch, row]);

  return (
    <button
      className="btn removebtn"
      onClick={handleRemove}
    >
      Remove
    </button>
  );
};

RemoveButton.propTypes = {
  row: PropTypes.shape({
    original: PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    }),
  }).isRequired,
};

/* =========================
   Main Component
========================= */
const Contactus = () => {
  const dispatch = useDispatch();
  const { data = [], loading, error } = useSelector(
    (state) => state.contactus,
  );

  const tableHeaders = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Mobile', accessor: 'mobile' },
    { Header: 'Subject', accessor: 'subject' },
    {
      Header: 'Message',
      accessor: 'message',
      Cell: (props) => <MessageCell {...props} />,
    },
    {
      Header: 'Actions',
      accessor: 'actions',
      Cell: (props) => <RemoveButton {...props} />,
    },
  ];

  useEffect(() => {
    dispatch(getContactUs());
  }, [dispatch]);

  if (loading) {
    return (
      <p className="text-white px-4">
        Loading enquiries...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-danger px-4">
        Error loading enquiries: {error}
      </p>
    );
  }

  return (
    <div className="container-fluid mt-5">
      <div className="mainheadig mx-4 mb-3">
        <h4 className="text-white font-weight-bold">
          Enquiry List
        </h4>
      </div>

      {Array.isArray(data) && data.length > 0 ? (
        <AdminTable
          tableHeaders={tableHeaders}
          tableData={data}
        />
      ) : (
        <p className="text-white px-4">
          No enquiries found.
        </p>
      )}
    </div>
  );
};

export default Contactus;
