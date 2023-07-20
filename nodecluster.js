// // const cluster = require('cluster');
// // const os = require('os');

// // // if (cluster.isMaster) {
// // //   console.log(`Master process is running on PID ${process.pid}`);

// //   const numCPUs = os.cpus().length;
// //   console.log(`Number of CPU cores: ${numCPUs}`);
// // } else {
// //   // Perform worker process tasks
// //   console.log(`Worker process ${process.pid} started`);
// // }
// // var numofCPUs = require('os').cpus().length;


// // if (cluster.isMaster) {
// //     console.log(`Master with Process ID : ${process.pid} is running`);
  
// //     // Fork workers.
// //     for (var i = 0; i < numofCPUs; i++) {
// //       cluster.fork();
// //     }
  
// //     cluster.on('exit', (worker, code, signal) => {
// //       console.log(`worker with Process ID : ${worker.process.pid} died`);
// //     });
// //   }
// //   else {
// //     // Workers sharing an HTTP server
// //     http.createServer((req, res) => {
// //       res.writeHead(200);
// //       res.end('An example of clusters\n');
// //     }).listen(3000);
// //     console.log(`Worker with Process ID : ${process.pid} started`);
  
// //   }
// const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

// if (isMainThread) {
//   console.log(`Main thread is running on PID ${process.pid}`);

//   // Spawn worker threads
//   const worker1 = new Worker(__filename, { workerData: { id: 1 } });
//   const worker2 = new Worker(__filename, { workerData: { id: 2 } });

//   // Handle messages received from worker threads
//   worker1.on('message', message => console.log(`Message from worker 1: ${message}`));
//   worker2.on('message', message => console.log(`Message from worker 2: ${message}`));

//   // Send data to worker threads
//   worker1.postMessage('Hello from the main thread to worker 1!');
//   worker2.postMessage('Hello from the main thread to worker 2!');
// } else {
//   // Worker thread logic
//   const { id } = workerData;

//   // Receive messages from the main thread
//   parentPort.on('message', message => console.log(`Message in worker ${id}: ${message}`));

//   // Send message back to the main thread
//   parentPort.postMessage(`Hello from worker ${id} to the main thread!`);

//   // Perform computationally intensive task (e.g., Fibonacci calculation)
//   const result = fibonacci(40);
//   console.log(`Worker ${id} result: ${result}`);
// }

// // Fibonacci calculation function
// function fibonacci(n) {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
const http=require('http');
const port=4100;
const cluster=require('cluster')
const os=require('os')


if(cluster.isMaster){
    console.log(`${process.pid}`);
    for(let i=0;i<os.cpus().length;i++){
        cluster.fork()
    }

    cluster.on('exit',(Worker,codee,signal)=>{
        console.log(`worker died`);
        // cluster.fork()
    })
}
const server=http.createServer((req,res)=>{
    if(req.url=='/with/:n'){

   
    let n = parseInt(req.params.n);
    let count = 0;
if (n > 5000000000) n = 5000000000;
   
    for (let i = 0; i <= n; i++) {
      count += i;
    }
   
    res.end(`Final count is ${count}`);
}
})

server.listen(port,()=>{
    console.log(`server is listening at port ${port}`);
})