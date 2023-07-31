type PersonListProps = {
    names: {
        first: string,
        last: string
    }[]
    }


const PersonList = ({names} : PersonListProps) => {
  return (
    <div>
          <ul>{names.map(name => <li style={{listStyleType: "none"}} key={name.first}>{name.first}{name.last}</li>)}</ul>
    </div>
  )
}

export default PersonList
