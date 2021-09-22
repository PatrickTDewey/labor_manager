const { Worker } = require('../models/worker.model');

module.exports.findAllWorkers = (req, res) => {
  Worker.find().sort({lastName:'asc'})
    .then(users => res.json(users))
    .catch(err => res.status(404).json(err))
}
module.exports.newWorker = (req, res) => {
  Worker.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.status(400).json(err))
}
module.exports.updateWorker = (req, res) => {
    Worker.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(updatedWorker => res.json(updatedWorker))
      .catch(err => res.status(400).json(err))
  
}
module.exports.deleteWorker = (req, res) =>{
  Worker.deleteOne({_id:req.params.id})
      .then(conf => res.json(conf))
      .catch(err => res.json(err))
}

module.exports.getWorker = (req,res) =>{
  Worker.findOne({_id:req.params.id})
      .then(product => res.json(product))
      .catch(err => res.json(err))
}
module.exports.updateAll = (req,res) =>{
  Worker.updateMany({}, {working: req.body})
    .then(conf => res.json(conf))
    .catch(err => res.status(400).json(err))
}
module.exports.findFirst = (req, res) => {
  Worker.findOne({})
    .then(worker => res.json(worker))
    .catch(err => res.status(404).json(err))
}