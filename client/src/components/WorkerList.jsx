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
                    {workers.map((worker, i) => {
                        return <tr key={i} >
                            <td>{worker.firstName} {worker.lastName}</td>
                            <td>{worker.availability.map((a,i) => {
                                switch(i){
                                    case 0:
                                        return (a ? 'Monday ' : null)
                                    case 1:
                                        return (a ? 'Tuesday ' : null)
                                    case 2:
                                        return (a ? 'Wednesday ' : null)
                                    case 3:
                                        return (a ? 'Thursday ' : null)
                                    case 4:
                                        return (a ? 'Friday ' : null)
                                    case 5:
                                        return (a ? 'Saturday ' : null)
                                    case 6:
                                        return (a ? 'Sunday ' : null )
                                    default:
                                        return null;
                                }
                            })}</td>
                            <td>
                                <button  onClick={() => clickHandler(worker._id)}className="btn btn-danger me-2">Delete</button>
                                <Link to={`/workers/edit/${worker._id}`} className="btn btn-warning me-2">Edit</Link>
                                <Link to={`/workers/details/${worker._id}`} className="btn btn-primary">Details</Link>
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
        </>
    )
}
// onClick={() => onDelete(worker._id)}
export default WorkerList
