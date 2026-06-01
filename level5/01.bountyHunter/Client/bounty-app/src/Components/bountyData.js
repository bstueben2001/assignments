const { v4: uuidv4 } = require('uuid')

const bounties = [
  { firstName: 'Darth',   lastName: 'Vader',     living: false, bountyAmount: 1000000, type: 'Sith', _id: uuidv4() },
  { firstName: 'Darth',   lastName: 'Maul',      living: false, bountyAmount: 750000,  type: 'Sith', _id: uuidv4() },
  { firstName: 'Luke',    lastName: 'Skywalker', living: true,  bountyAmount: 500000,  type: 'Jedi', _id: uuidv4() },
  { firstName: 'Obi-Wan', lastName: 'Kenobi',    living: false, bountyAmount: 800000,  type: 'Jedi', _id: uuidv4() },
  { firstName: 'Yoda',    lastName: 'Unknown',   living: false, bountyAmount: 950000,  type: 'Jedi', _id: uuidv4() },
]

module.exports = bounties
