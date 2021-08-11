import PropTypes from 'prop-types';
import { useState } from 'react'

export default function Form({ submit }) {
    const [text, setText] = useState({
        text: '',
    });

    const handleChange = () => {

    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className='crud-form' onSubmit={handleSubmit}>
            <textarea 
                name='text' 
                className='crud-form-textarea' 
                value={text} 
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
