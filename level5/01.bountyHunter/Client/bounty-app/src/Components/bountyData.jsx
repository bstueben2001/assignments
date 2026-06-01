import { useState } from 'react'

export const initialBounties = [
  { firstName: 'Darth',  lastName: 'Vader',     living: false, bountyAmount: 1000000, type: 'Sith',  _id: crypto.randomUUID() },
  { firstName: 'Darth',  lastName: 'Maul',      living: false, bountyAmount: 750000,  type: 'Sith',  _id: crypto.randomUUID() },
  { firstName: 'Luke',   lastName: 'Skywalker', living: true,  bountyAmount: 500000,  type: 'Jedi',  _id: crypto.randomUUID() },
  { firstName: 'Obi-Wan',lastName: 'Kenobi',    living: false, bountyAmount: 800000,  type: 'Jedi',  _id: crypto.randomUUID() },
  { firstName: 'Yoda',   lastName: 'Unknown',   living: false, bountyAmount: 950000,  type: 'Jedi',  _id: crypto.randomUUID() },
]

export default function BountyData() {
    const [bounties, setBounties] = useState(initialBounties)

    return (
        <>

        </>
    )
}
