import { useState } from 'react'
import Display from './Display.jsx'

const emptyForm = { firstName: '', lastName: '', bountyAmount: '', type: 'Jedi', living: true }

export default function Bounties({ bounties, onAdd, onUpdate, onDelete }) {
    const [showForm, setShowForm] = useState(false)
    const [form, setForm] = useState(emptyForm)

    function handleChange(e) {
        const { name, value, type, checked } = e.target
        setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        onAdd({ ...form, bountyAmount: Number(form.bountyAmount) })
        setForm(emptyForm)
        setShowForm(false)
    }

    return (
        <>
            <div className="bounties-header">
                <h1>Active Bounties</h1>
                <button className="btn-new-bounty" onClick={() => setShowForm(prev => !prev)}>
                    {showForm ? 'Cancel' : '+ New Bounty'}
                </button>
            </div>

            {showForm && (
                <form className="add-bounty-form" onSubmit={handleSubmit}>
                    <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First name" required />
                    <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last name" required />
                    <input name="bountyAmount" type="number" value={form.bountyAmount} onChange={handleChange} placeholder="Bounty amount" required />
                    <select name="type" value={form.type} onChange={handleChange}>
                        <option value="Jedi">Jedi</option>
                        <option value="Sith">Sith</option>
                    </select>
                    <label className="edit-living-label">
                        <input name="living" type="checkbox" checked={form.living} onChange={handleChange} />
                        Alive
                    </label>
                    <button type="submit" className="btn-save">Add Bounty</button>
                </form>
            )}

            <Display bounties={bounties} onUpdate={onUpdate} onDelete={onDelete} />
        </>
    )
}
