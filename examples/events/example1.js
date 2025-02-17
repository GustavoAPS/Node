
// Listen for 'exit' event
process.on('exit', (code) => {
    console.log(`Process is about to exit with code: ${code}`)
}); 


console.log("Doing something")

setTimeout(() => {
    console.log("Finishing the work");
    process.exit(0);
}, 1000);