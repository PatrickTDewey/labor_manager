const WorkerController = require('../controllers/worker.controller');
module.exports = function(app){
  app.get('/api/workers', WorkerController.findAllWorkers);
  app.get('/api/workers/:id', WorkerController.getWorker);
  app.post('/api/workers/new', WorkerController.newWorker);
  app.delete('/api/workers/delete/:id', WorkerController.deleteWorker)
  app.put('/api/workers/update/:id' , WorkerController.updateWorker)
}
