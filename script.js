const worker = new Worker('worker.js');
worker.onmessage = (e) => {
    alert(e.data)
  }
worker.postMessage(`{"action":"GENERATE"}`)