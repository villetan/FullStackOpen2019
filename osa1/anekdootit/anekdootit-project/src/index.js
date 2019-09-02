import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, onClick}) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const argMax = (array) => {
  const amax = array.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
  return amax ? amax : 0
}

const App = (props) => {
  const [selected, setSelected] = useState(getRandomInt(props.anecdotes.length))
  const [votes, setVotes] = useState(new Uint8Array(props.anecdotes.length))

  const handleNext = () => {
    setSelected(getRandomInt(props.anecdotes.length))
  }
  const handleVote = () => {
    const votes_cp = [ ...votes ]
    votes_cp[selected] += 1
    setVotes(votes_cp)
  }
  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        {props.anecdotes[selected]}
        <br />
        <p>has {votes[selected]} votes </p>
        <Button onClick={handleVote} text="vote" />
        <Button onClick={handleNext} text="next anecdote" />
      </div>
      <div>
        <h1>Anecdote with the most votes</h1>
        <p>{props.anecdotes[argMax(votes)]}
          <br />
          has {votes[argMax(votes)]} votes.
        </p>
      </div>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)