import React, { useState } from 'react'

const Contacts = ({contacts}) => (
  contacts.map(contact => <Contact name={contact.name} key={contact.name}/>)
)

const Contact = ({name}) => {
  return(
    <li>{name}</li>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleAdd = (event) => {
    event.preventDefault()
    const person_object = {
      name: newName
    }
    if(persons.map(x => x.name).includes(newName)){
      window.alert(`${newName} is already added to the phonebook`)
    }else{
      setPersons(persons.concat(person_object))
      setNewName("")
    }
    
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAdd}>
        <div>
          name: 
          <input 
            value={newName} 
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Contacts contacts={persons} />
    </div>
  )

}

export default App