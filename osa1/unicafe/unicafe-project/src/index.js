import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({header_text}) => <h1>{header_text}</h1>

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const Stat = ({text, value, unit}) => {
  return(
    <p>{text} {value} {unit}</p>
  )
}

const Stats = ({good, neutral, bad}) => {
  const total = bad + neutral + good
  const avg = (bad * (-1) + neutral * 0 + good * 1) / total
  const good_per = good / total
  if(total === 0) return(<p>No feedback given</p>)
  return (
    <div>
      <Stat text="good" value={good}/>
      <Stat text="neutral" value={neutral}/>
      <Stat text="bad" value={bad}/>
      <Stat text="all" value={total}/>
      <Stat text="average" value={avg}/>
      <Stat text="positive" value={good_per * 100} unit="%"/>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleNeutral = () => setNeutral(neutral +1)
  const handleBad = () => setBad(bad +1)

  return (
    <div>
    <Header header_text="give feedback" />
    <Button onClick={() => setGood(good + 1)} text="good" />
    <Button onClick={handleNeutral} text="neutral" />
    <Button onClick={handleBad} text="bad" />
    <Header header_text="statistics" />
    <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)