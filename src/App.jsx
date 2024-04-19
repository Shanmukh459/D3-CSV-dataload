import { useEffect, useState } from 'react'
import { csv, csvFormat } from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/Shanmukh459/cc27c72a6bd5e5d41618edf3eb91612a/raw/cssNamedColors.csv';

const message = (data) => {
  let message = '';
  message += data.length + ' rows\n';
  message += data.columns.length + ' columns\n';
  message += Math.round(csvFormat(data).length / 1024) + ' KB';
  return message
}

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, [])

  return (
    <pre>Data is {data ? message(data) : 'loading'}</pre>
  )
}

export default App
