function getClock() {
  const date = new Date();
  const hrs = date.getHours();
  const mins = date.getMinutes();
  const sec = date.getSeconds();
  console.clear();
  console.log(`${hrs}:${mins}:${sec}`);
}

setInterval(getClock, 1000);
