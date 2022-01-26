const worker = new Worker('worker.js')

worker.onmessage = function (e) {
  console.log('主线程收到worker线程消息：', e.data)
}

worker.postMessage('主线程发送world')
