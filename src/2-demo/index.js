const calc = () => {
  let result = 0
  for (let i = 0; i < 10000; i++) {
    result += i
  }
  console.log('result', result)
}

const createBlobURL = (func) => {
  const blob = new Blob([`(${func.toString()})()`])
  return URL.createObjectURL(blob)
}

const myWorker = new Worker(createBlobURL(calc))
