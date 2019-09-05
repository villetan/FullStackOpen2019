import React, { useState } from 'react'

const Contacts = ({contacts}) => (
  contacts.map(contact => <Contact name={contact.name}
                                   number={contact.number} 
                                   key={contact.name} 
                          />)
)

const Contact = ({name, number}) => {
  return (
    <li>{name} {number}</li>
  )
}

const App = () => {
    const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleAdd = (event) => {
    event.preventDefault()
    const person_object = {
      name: newName,
      number: newNumber
    }
    if (persons.map(x => x.name).includes(newName)) {
      window.alert(`${newName} is already added to the phonebook`)
    } else {
      setPersons(persons.concat(person_object))
      setNewName("")
      setNewNumber("")
    }

  }
  const personsToShow = filter === "" ? persons : persons.filter(pp => pp.name.toLowerCase().startsWith(filter.toLowerCase()))

  const handleInputChange = (inputChangeFun, field) => {
    return (
      (event) => {
        inputChangeFun(event.target.value)
      }
    )
  }

  return (
    <div>
    <h2>Phonebook</h2>
    filter shown with
      <input
            value={filter}
            onChange={handleInputChange(setFilter)}
      />
      <h2>add a new contact</h2>
      <form onSubmit={handleAdd}>
        <div>
          name:
          <input
            value={newName}
            onChange={handleInputChange(setNewName)}
            />
          phone:
          <input
            value={newNumber}
            onChange={handleInputChange(setNewNumber)}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Contacts contacts={personsToShow} />
    </div>
  )

}

export default App