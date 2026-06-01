import Display from './Display.jsx'

export default function Bounties({ bounties }) {
    return (
        <>
            <div className="bounties-header">
                <h1>Active Bounties</h1>
            </div>
            <Display bounties={bounties} />
        </>
    )
}
