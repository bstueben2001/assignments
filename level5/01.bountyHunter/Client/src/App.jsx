import { useState, useEffect } from 'react'
import Home from './Components/Home.jsx'

function App() {
  const [bounties, setBounties] = useState([])

  useEffect(() => {
    fetch('/bounties')
      .then(res => res.json())
      .then(data => setBounties(data))
  }, [])

  function addBounty(newBounty) {
    fetch('/bounties', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBounty)
    })
      .then(res => res.json())
      .then(created => setBounties([...bounties, created]))
  }

  function updateBounty(bountyId, updatedFields) {
    fetch(`/bounties/${bountyId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedFields)
    })
      .then(res => res.json())
      .then(updated => setBounties(bounties.map(b => b._id === bountyId ? updated : b)))
  }

  function deleteBounty(bountyId) {
    fetch(`/bounties/${bountyId}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(remaining => setBounties(remaining))
  }

  return (
    <>
      <Home/>
    </>
  )
}

export default App
