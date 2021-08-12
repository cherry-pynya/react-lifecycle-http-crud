import PropTypes from "prop-types";

export default function Dashboard({ data, deleteNote }) {
  const handleDelete = (e) => {
    deleteNote(e.target.id);
  };

  return (
    <div className="crud-dashboard">
      {data.map((el) => {
        return (
          <div className="crud-dashboard-item" key={el.id}>
            <button
              type="button"
              onClick={handleDelete}
              className="crud-btn item-btn"
            >
              <span id={el.id} className="material-icons outlined">clear</span>
            </button>
            <span>{el.content}</span>
          </div>
        );
      })}
    </div>
  );
}

Dashboard.propTypes = {
  data: PropTypes.array.isRequired,
  deleteNote: PropTypes.func.isRequired,
};
