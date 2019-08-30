import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name},
         you are {props.age} years old
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by 
      <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

const App = () => {
  const nimi = 'Pekka'
  const ika = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="MAYA" age={10 + 20}/>
      <Hello name={nimi} age={ika} />
      <Footer />
    </>
  )
}

ReactDOM.render(<App />,
 document.getElementById('root'))