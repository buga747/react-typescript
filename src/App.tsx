import {useState} from 'react'

import './App.css'


import { Button } from './components/Button'
import Input from './components/Input'
// import Greet from './components/Greet'
// import Heading from './components/Heading'
// import Oscar from './components/Oscar'
// import Person from './components/Person'
// import PersonList from './components/PersonList'
// import Status from './components/Status'

function App() {
const [count, setCount] = useState(0)
const [inputText, setInputText] = useState('')
  // const personName = {
  //   first: "Bruce",
  //   last: "Wayne"
  // }
  
  // const nameList = [
  //   {
  //   first: "Bruce",
  //   last: "Wayne"
  //   },
  //   {
  //   first: "Clark",
  //   last: "Kent"
  //   },
  //   {
  //   first: "Robin",
  //   last: "Hood"
  // }
  // ]
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
    setCount(prev => prev + 1)
    console.log(event, id)
  }
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setInputText(text);
  };

  return (
    <>
      {/* <Greet name='Oleh'  isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='loading' />
      <Heading> My new text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo di Caprio</Heading>
      </Oscar> */}
      <Button handleClick={handleClick} count={count} />
      <Input handleChange={handleInputChange} value={inputText} />
      <p>InputText - {inputText}</p>
    </>
  )
}

export default App
