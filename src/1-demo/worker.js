self.addEventListener('message', function (e) {
  console.log('worker线程收到主线程消息：', e.data)
})

self.postMessage('worker线程发送hello')
