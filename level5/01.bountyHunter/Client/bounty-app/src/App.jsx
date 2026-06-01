import { useState } from 'react'
import { initialBounties } from './Components/bountyData'

function App() {
  const [bounties, setBounties] = useState(initialBounties)

  function addBounty(newBounty) {
    setBounties([...bounties, { ...newBounty, _id: crypto.randomUUID() }])
  }

  function updateBounty(bountyId, updatedFields) {
    setBounties(bounties.map(b => b._id === bountyId ? { ...b, ...updatedFields } : b))
  }

  function deleteBounty(bountyId) {
    setBounties(bounties.filter(b => b._id !== bountyId))
  }

  return (
    <>

    </>
  )
}

export default App
