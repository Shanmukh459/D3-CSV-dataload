import { useEffect, useState } from 'react'
import { arc, csv, pie } from 'd3';
// import { message } from './message';

const csvUrl = 'https://gist.githubusercontent.com/Shanmukh459/cc27c72a6bd5e5d41618edf3eb91612a/raw/cssNamedColors.csv';
const height = window.screen.height
const width = window.screen.width
const centerX = width / 2
const centerY = height / 2

const pieArc = arc()
  .innerRadius(0)
  .outerRadius(width)

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, [])

  if(!data){
    return <pre>Loading...</pre>
  }

  const colorPie = pie().value(1)

  return (
    <svg height={height} width={width}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        {
          colorPie(data).map(d => (
            <path fill={d.data['RGB hex value']} d={pieArc(d)} />
          ))
        }
        {/* {
          data.map((d, i) => (
          <path 
            fill={d['RGB hex value']} 
            d={pieArc({
              startAngle: i/data.length * Math.PI * 2,
              endAngle: (i+1)/data.length * Math.PI*2
            })}
          />
        ))
        } */}
      </g>  
    </svg>
  )

}

export default App
