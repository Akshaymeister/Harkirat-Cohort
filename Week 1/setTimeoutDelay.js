const startTime = performance.now();
setTimeout(() => {
  const endtime = performance.now();
  const delay = endtime - startTime;

  console.log(`expected delay: 1000ms`);
  console.log(`Actual delay: ${delay.toFixed(2)}ms`);
}, 1000);
