import { useState } from 'react'

export default function Display({ bounties, onUpdate, onDelete }) {
    const [editingId, setEditingId] = useState(null)
    const [editForm, setEditForm] = useState({})

    function startEdit(bounty) {
        setEditingId(bounty._id)
        setEditForm({
            firstName: bounty.firstName,
            lastName: bounty.lastName,
            bountyAmount: bounty.bountyAmount,
            type: bounty.type,
            living: bounty.living
        })
    }

    function handleChange(e) {
        const { name, value, type, checked } = e.target
        setEditForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    }

    function handleSave(bountyId) {
        onUpdate(bountyId, { ...editForm, bountyAmount: Number(editForm.bountyAmount) })
        setEditingId(null)
    }

    return (
        <div className="display">
            {bounties.map(bounty => (
                <div key={bounty._id} className="bounty-card">
                    {editingId === bounty._id ? (
                        <div className="bounty-edit-form">
                            <input name="firstName" value={editForm.firstName} onChange={handleChange} placeholder="First name" />
                            <input name="lastName" value={editForm.lastName} onChange={handleChange} placeholder="Last name" />
                            <input name="bountyAmount" type="number" value={editForm.bountyAmount} onChange={handleChange} placeholder="Bounty amount" />
                            <select name="type" value={editForm.type} onChange={handleChange}>
                                <option value="Jedi">Jedi</option>
                                <option value="Sith">Sith</option>
                            </select>
                            <label className="edit-living-label">
                                <input name="living" type="checkbox" checked={editForm.living} onChange={handleChange} />
                                Alive
                            </label>
                            <div className="bounty-card-actions">
                                <button className="btn-save" onClick={() => handleSave(bounty._id)}>Save</button>
                                <button className="btn-cancel" onClick={() => setEditingId(null)}>Cancel</button>
                            </div>
                        </div>
                    ) : (
                        <>
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
                            <div className="bounty-card-actions">
                                <button className="btn-edit" onClick={() => startEdit(bounty)}>Edit</button>
                                <button className="btn-delete" onClick={() => onDelete(bounty._id)}>Delete</button>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}
