const os = require("os");
const cpuData = os.cpus();
console.log(cpuData);
const numOfCpus = os.cpus().length
console.log(numOfCpus); // To get the # of cpu's

/*

Each CPU object in the array has these values:

model: string of the CPU model
speed: number of the CPU speed in MHz
user: number of milliseconds the CPU has spent in user mode
nice: number of milliseconds the CPU has spent in nice mode
sys: number of milliseconds the CPU has spent in sys mode
idle: number of milliseconds the CPU has spent in idle mode
irq: number of milliseconds the CPU has spent in irq mode

*/