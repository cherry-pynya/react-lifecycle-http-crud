import PropTypes from 'prop-types';

export default function Dashboard({ data, deleteNote}) {
    return (
        <div className='crud-dashboard'>

        </div>
    );
}

Dashboard.propTypes = {
    data: PropTypes.array.isRequired,
    deleteNote: PropTypes.func.isRequired,
}
