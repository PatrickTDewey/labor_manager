import { Link } from 'react-router-dom'
import { useState } from 'react'
const WorkerList = ({ workers, onDelete }) => {
    const [state, setState] = useState(false)
    const [idState, setIdState] = useState()
    const clickHandler = (id) => {
        setState(true)
        setIdState(id)
    }
    const confirmDelete = () => {
        setState(false)
        onDelete(idState)
        setIdState()
    }
    return (
        <>
            <table className={`table table-dark table-hover table-striped ` + (state ? `opacity` : '')}>
                <thead>
                    <tr>
                        <th>Worker Name</th>
                        <th>Availability</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {workers.map(worker => {
                        return <tr key={worker.firstName} >
                            <td className="btn-link">{worker.firstName} {worker.lastName}</td>
                            <td>{worker.availability}</td>
                            <td>
                                <button  onClick={() => clickHandler(worker._id)}className="btn btn-danger me-2">Delete</button>
                                <Link to={`/workers/edit/${worker._id}`} className="btn btn-warning">Edit</Link>
                            </td>
                            
                        </tr>
                    })}
                </tbody>
            </table>
            {state ? <div className="container-sm alert-box">
                <h3>Are you sure you want to delete?</h3>
                <button className="btn btn-danger me-2" onClick={confirmDelete}>Yes</button>
                <button className="btn btn-warning" onClick={() => setState(false)}>No</button>
            </div>:null}
            <Link to='/workers/add' className="btn btn-primary">Add Worker</Link>
        </>
    )
}
// onClick={() => onDelete(worker._id)}
export default WorkerList
