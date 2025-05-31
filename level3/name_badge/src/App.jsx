import { useState } from 'react'
import BadgeList from './Components/BadgeList'
import BadgeForm from './Components/BadgeForm'


function App() {
  const [badgeList, setBadgeList] = useState([]);

  const addBadge = (newBadge) => {
    console.log("New badge added", newBadge)
    setBadgeList(prevBadge => 
      [...prevBadge, newBadge]
    )
  }

  return (
    <>
    <BadgeForm addBadge={addBadge} />
    <h2>List of Badges</h2>
    <BadgeList badgeList={badgeList}/>
    </>
  )
}

export default App
