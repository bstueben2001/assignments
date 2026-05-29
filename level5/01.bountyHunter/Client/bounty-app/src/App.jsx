import { useState } from 'react'

const initialBounties = [
  { firstName: 'Darth',  lastName: 'Vader',    living: false, bountyAmount: 1000000, type: 'Sith',  _id: crypto.randomUUID() },
  { firstName: 'Darth',  lastName: 'Maul',     living: false, bountyAmount: 750000,  type: 'Sith',  _id: crypto.randomUUID() },
  { firstName: 'Luke',   lastName: 'Skywalker', living: true,  bountyAmount: 500000,  type: 'Jedi',  _id: crypto.randomUUID() },
  { firstName: 'Obi-Wan',lastName: 'Kenobi',   living: false, bountyAmount: 800000,  type: 'Jedi',  _id: crypto.randomUUID() },
  { firstName: 'Yoda',   lastName: 'Unknown',  living: false, bountyAmount: 950000,  type: 'Jedi',  _id: crypto.randomUUID() },
]

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
