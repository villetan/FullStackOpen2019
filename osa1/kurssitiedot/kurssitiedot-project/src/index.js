import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return(
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  const parts = props.ps.map(x => <Part part={x.name} exercises={x.exercises} />)
  return(
    <div>
      {parts}
    </div>
  )
}

const Total = (props) => {
  const sum_ex = props.ps.map(x => x.exercises).reduce((a, b) => a + b, 0)
  return(
    <p>Number of exercises {sum_ex}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
  ]
  return (
    <div>
      <Header course={course}/>
      <Content ps={parts}/>
      <Total ps={parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))