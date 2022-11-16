import { useState } from 'react';
import Person from './components/Person';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const addPerson = (event) => {
    event.preventDefault();

    const nameIsInPhonebook = persons.find(
      (person) => person.name === newName
    )
      ? true
      : false;

    if (nameIsInPhonebook) {
      window.alert(`${newName} is already added in phonebook.`);
    } else {
      addContent();
    }
  };

  const addContent = () => {
    const contentInNameField = newName !== '' ? true : false;
    const contentInNumberField = newNumber !== '' ? true : false;

    if (!contentInNameField)
      window.alert(`No name is specified for the number.`);
    else if (!contentInNumberField) {
      window.alert(`No number is specified for the name.`);
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };
      setPersons(persons.concat(personObject));
      setNewNumber('');
      setNewName('');
    }
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  };

  const printPhoneBook = () => {
    const filteredPhoneBook = persons.filter((person) =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredPhoneBook.map((person) => (
      <Person key={person.name} person={person} />
    ));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter with:{' '}
        <input value={filter} onChange={handleFilterChange} />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number:{' '}
          <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {printPhoneBook()}
    </div>
  );
};

export default App;
