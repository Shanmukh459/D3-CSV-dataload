import { useEffect, useState } from 'react'
import { csv } from 'd3';
// import { message } from './message';

const csvUrl = 'https://gist.githubusercontent.com/Shanmukh459/cc27c72a6bd5e5d41618edf3eb91612a/raw/cssNamedColors.csv';

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
