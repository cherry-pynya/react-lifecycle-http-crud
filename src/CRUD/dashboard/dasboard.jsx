import PropTypes from 'prop-types';

export default function Dashboard({ data, deleteNote}) {
    return (
        <div className='crud-dashboard'>
            {data.map((el) => {
                return (
                    <div className='crud-dashboard-item'></div>
                );
            })}
        </div>
    );
}

Dashboard.propTypes = {
    data: PropTypes.array.isRequired,
    deleteNote: PropTypes.func.isRequired,
}
