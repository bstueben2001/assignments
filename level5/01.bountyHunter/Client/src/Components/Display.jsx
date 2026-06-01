export default function Display({ bounties }) {
    return (
        <div className="display">
            {bounties.map(bounty => (
                <div key={bounty._id} className="bounty-card">
                    <div className="bounty-card-header">
                        <span className="bounty-name">{bounty.firstName} {bounty.lastName}</span>
                        <span className={`bounty-type ${bounty.type.toLowerCase()}`}>{bounty.type}</span>
                    </div>
                    <div className="bounty-card-body">
                        <p className="bounty-amount">${bounty.bountyAmount.toLocaleString()}</p>
                        <p className={`bounty-status ${bounty.living ? 'alive' : 'deceased'}`}>
                            {bounty.living ? 'Alive' : 'Deceased'}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}
