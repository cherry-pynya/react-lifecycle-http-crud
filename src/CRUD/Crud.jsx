import { useState, useEffect } from "react";
import fetchData from "./API/fetchData";
import PropTypes from "prop-types";
import Dashboard from "./dashboard/dasboard";
import Form from "./form/form";
import uploadData from "./API/uploadData";
import { v4 as uuidv4 } from "uuid";
import deleteNote from "./API/deleteNote";
import "./crud.css";

export default function Crud({ server }) {
  const [data, setData] = useState([]);
  
  const update = (ser) => {
    fetchData(server).then(
      (res) => {
        setData(res);
      },
      (reject) => {
        throw new Error("Server disconected");
      }
    );
  };

  useEffect(() => {
    update();
  }, []);

  const handleDelete = (id) => {
    const arr = data;
    deleteNote(server, id);
    const index = arr.findIndex((el) => {
        if (el.id === Number(id)) return el;
    });
    arr.splice(index, 1);
    setData([...arr]);
  };

  const handleUpload = () => {
    update();
  };

  const handleSubmit = (obj) => {
    const id = uuidv4();
    const data = {
      id: id,
      content: obj.text,
    };
    uploadData(server, data);
    update();
  };

  return (
    <div className="crud">
      <div className="crud-header">
        <h2>Notes</h2>
        <button
          type="button"
          className="crud-btn header-btn"
          onClick={handleUpload}
        >
          <span className="material-icons outlined icon">refresh</span>
        </button>
      </div>
      <Dashboard data={data} deleteNote={handleDelete} />
      <Form submit={handleSubmit} />
    </div>
  );
}

Crud.propsType = {
  server: PropTypes.string.isRequired,
};
