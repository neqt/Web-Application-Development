let timer
function startUpdatingDate() {
  postMessage('changColor')
  timer = setInterval(function () {
    const data = new Date();
    postMessage(data);
    postMessage('changColor')
  }, 1000);
}

onmessage = function (event) {
  if (event.data === 'start') {
    startUpdatingDate();
  }
  else if (event.data === 'stop') {
    const data = new Date();
    postMessage(data)
    this.clearInterval(timer)
  }
};
