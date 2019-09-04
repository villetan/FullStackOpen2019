import React from 'react'
import '../index.css';

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
  const parts_html = props.ps.map(x => <Part key={x.id} part={x.name} exercises={x.exercises} />)
  return(
    <div>
      {parts_html}
    </div>
  )
}

const Total = (props) => {
  const sum_ex = props.ps.reduce((a, b) => a + b.exercises, 0)
  return(
    <p className="bold_text">total of  {sum_ex} exercises</p>
  )
}

const Course = ({course}) => {
  //debugger
  return(
    <>
    <Header course={course.name} />
    <Content ps={course.parts} />
    <Total ps={course.parts} />
    </> 
  )
}

export default Course