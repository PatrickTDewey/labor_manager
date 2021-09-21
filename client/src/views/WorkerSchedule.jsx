import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const WorkerSchedule = () => {

    const { day_id } = useParams();
    let day
    switch (parseInt(day_id)) {
        case 1:
            day = 'Monday';
            break;

        case 2:
            day = 'Tuesday';
            break;

        case 3:
            day = 'Wednesday';
            break;

        case 4:
            day = 'Thursday';
            break;

        case 5:
            day = 'Friday';
            break;

        case 6:
            day = 'Saturday';
            break;
        case 7:
            day = 'Sunday';
            break;
        default:
            break;
    }
    const [workers, setWorkers] = useState();
    useEffect(() => {
        axios.get("http://localhost:8000/api/workers")
            .then(res => {
                let unsorted = res.data
                setWorkers(unsorted.sort((a, b) => a.lastName.localeCompare(b.lastName)))
            })
            .catch(err => console.log(err))
    }, [day_id])
    const handleClick = (e, worker) => {
        let filteredp = workers.filter(a => worker._id !== a._id)
        let editedArray = [...worker.working];
        editedArray[day_id - 1] = parseInt(e.target.value)
        worker = { ...worker, gameStatuses: editedArray }

        axios.put('http://localhost:8000/api/workers/update/' + worker._id, worker)
            .then(res => {
                let unsorted = [...filteredp, worker]
                setWorkers(unsorted.sort((a, b) => (a.lastName.localeCompare(b.lastName))))
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            {workers &&
                <div className="row">


                    <h1> Worker Status - Day {day} </h1>
                    <div className="d-flex">
                        <Link className="me-2 " to='/schedule/day/1'>Mon</Link>
                        <Link className="me-2 " to='/schedule/day/2'>Tues</Link>
                        <Link className="me-2 " to='/schedule/day/3'>Wed</Link>
                        <Link className="me-2 " to='/schedule/day/4'>Thurs</Link>
                        <Link className="me-2 " to='/schedule/day/5'>Fri</Link>
                        <Link className="me-2 " to='/schedule/day/6'>Sat</Link>
                        <Link className="me-2" to='/schedule/day/7'>Sun</Link>
                    </div>
                    <table className="table table-dark table-hover table-striped">
                        <thead>
                            <tr>
                                <th>Worker Name</th>
                                {
                                    Object.keys(workers[0].working).map((key, i) => <th key={i}>{key}</th>)
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {workers && workers.map((worker, i) => {
                                return <tr key={i}>
                                    <td>{worker.firstName} {worker.lastName} </td>
                                    {Object.keys(worker.working).map((key, idx) => <td key={idx}><button onClick={(e) => { handleClick(e, worker, key) }} className={worker.working[key][day_id-1] === 1 ? 'btn btn-success me-2' : 'btn btn-light me-2' } value={1}></button></td>)}
                                    {/* worker[key][day-1] */}
                                </tr>

                            })}
                        </tbody>


                    </table>
                    <Link to='/'>Home</Link>
                </div>

            }


        </div>
    )
}

export default WorkerSchedule
