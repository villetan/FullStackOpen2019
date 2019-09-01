import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({header_text}) => <h1>{header_text}</h1>

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const Stats = ({good, neutral, bad}) => {
  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
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