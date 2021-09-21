import React, { useEffect, useState } from 'react'
import axios from 'axios'
import WorkerList from '../components/WorkerList'
const Main = () => {
  const [workers, setWorkers] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8000/api/workers/")
      .then(res => setWorkers(res.data))
  }, []);
  const deleteWorker = ( id ) => {
    axios.delete(`http://localhost:8000/api/workers/delete/${id}`)
    setWorkers(workers.filter(worker => worker._id !== id))
  }
  
  return (
    <div className="relative">
      <WorkerList workers={workers} onDelete={deleteWorker}/>
    </div>
  )
}
export default Main


