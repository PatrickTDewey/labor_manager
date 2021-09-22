import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from "axios"
let todaysDate = new Date().getDay()
// let testDate = new Date('September 19, 2021 23:15:30').getDay()
// console.log(testDate);
// testDate here to make sure this conditional is working the way intended
if (parseInt(todaysDate) === 0) {
    todaysDate = 6
}
else if (parseInt(todaysDate) === 6) {
    todaysDate = 0
}
// console.log(testDate);

const WorkerDetails = () => {
    const [worker, setWorker] = useState()
    const { id } = useParams()
    let daysWorked = {}
    useEffect(() => {
        axios.get("http://localhost:8000/api/workers/" + id)
            .then(res => {
                setWorker(res.data)
            })
            .catch(err => console.log(err))

    }, [id]);

    return (
        worker ?
            <div className="container my-4">
                <h1 className="text-center mt-2">Worker Name: {worker.firstName} {worker.lastName}</h1>
                <hr />
                <div className="row">
                    <div className="col-sm-6">
                        <h3 className="h3">Days Worked This Week</h3>
                        <hr />
                        {Object.keys(worker.working).forEach(key => {
                            console.log(key);
                            for (let i = 0; i < worker.working[key].length; i++) {
                               
                            }
                            console.log(daysWorked)
                        })}
                        {/* {worker.} */}
                    </div>
                </div>
            </div>
            : null
    )
}

export default WorkerDetails
