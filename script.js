const worker = new Worker('worker.js');
worker.onmessage = (e) => {
    alert(e)
  }
worker.postMessage(`{"action":"GENERATE"}`)