//Description: The Cluster module allows you to create child processes in Node.js, allowing for better utilization of multiple CPU cores.
//Usage: The Cluster module is useful for creating child processes and distributing the load across multiple CPU cores.
//Example: Creating a cluster of worker processes.

const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  console.log(`Worker ${process.pid} started`);
}
