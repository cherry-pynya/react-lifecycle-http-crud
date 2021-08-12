import PropTypes from 'prop-types';

export default function Dashboard({ data, deleteNote}) {
    const handleDelete = () => {
        
    };

    return (
        <div className='crud-dashboard'>
            {data.map((el) => {
                return (
                    <div className='crud-dashboard-item' key={el.id}>
                        <button type='button' onClick={handleDelete}>x</button>
                        <span>
                            {el.content}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

Dashboard.propTypes = {
    data: PropTypes.array.isRequired,
    deleteNote: PropTypes.func.isRequired,
}
