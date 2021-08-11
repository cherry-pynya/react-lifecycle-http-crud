import { useState, useEffect } from 'react';
import fetchData from './API/fetchData';
import PropTypes from 'prop-types';
import Dashboard from './dashboard/dasboard';
import Form from './form/form';

export default function Crud({ server }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData(server)
            .then(res => setData(res));
    }, [server])

    const handleDelete = () => {

    };

    const handleUpload = () => {

    };

    const handleSubmit = () => {
        
    };

    return (
        <div className='crud'>
            <div className='crud-header'>
                <h2>Notes</h2>
                <button type='button' className='crud-btn header-btn' onClick={handleUpload}></button>
            </div>
            <Dashboard data={data} deleteNote={handleDelete} />
            <Form submit={handleSubmit} />
        </div>
    );
}

Crud.propsType = {
    server: PropTypes.string.isRequired,
};
