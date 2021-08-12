import PropTypes from 'prop-types';
import { useState } from 'react'

export default function Form({ submit }) {
    const [data, setText] = useState({
        text: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setText(prevForm => ({...prevForm, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        submit(data);
        setText({
            text: '',
        });
    };

    return (
        <form className='crud-form' onSubmit={handleSubmit}>
            <textarea 
                name='text' 
                className='crud-form-textarea' 
                value={data.text} 
                onChange={handleChange}
            ></textarea>
            <button
                className='crud-btn crud-form-btn'
                type='submit'
            ></button>
        </form>
    );
}

Form.propTypes = {
    submit: PropTypes.func.isRequired,
};
