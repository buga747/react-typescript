import './App.css'
import Greet from './components/Greet'
import Heading from './components/Heading'
import Oscar from './components/Oscar'
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
      <Greet name='Oleh'  isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='loading' />
      <Heading> My new text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo di Caprio</Heading>
      </Oscar>
    </>
  )
}

export default App
