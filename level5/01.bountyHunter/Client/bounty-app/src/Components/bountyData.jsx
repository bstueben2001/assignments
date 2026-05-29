import { useState } from 'react'

const initialBounties = [
    { id: 1, name: 'Han Solo', reward: 250000, status: 'active' },
    { id: 2, name: 'Luke Skywalker', reward: 100000, status: 'active' },
    { id: 3, name: 'Obi-Wan Kenobi', reward: 75000, status: 'captured' },
]

export default function BountyData() {
    const [bounties, setBounties] = useState(initialBounties)

    return (
        <>

        </>
    )
}
