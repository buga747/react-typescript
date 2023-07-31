import './App.css'
import Greet from './components/Greet'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'

function App() {

  const personName = {
    first: "Bruce",
    last: "Wayne"
  }
  
  const nameList = [
    {
    first: "Bruce",
    last: "Wayne"
    },
    {
    first: "Clark",
    last: "Kent"
    },
    {
    first: "Robin",
    last: "Hood"
  }
  ]

  return (
    <>
      <Greet name='Oleh' messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='loading' />
    </>
  )
}

export default App
