import { useState } from 'react'
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    theme: '',
    canContact: false,
    contact: '',
    message: '',
  })

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }

  console.log(formData)

  return (
    <>
      <form>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Name'
        />
        <input
          type='number'
          name='age'
          value={formData.age}
          onChange={handleChange}
          placeholder='Age'
        />

        {/* Select/Option */}
        <select name='theme'>
          <option value=''>Choose Theme</option>
          <option value='dark'>Dark</option>
          <option value='light'>Light</option>
        </select>

        {/* Checkbox */}
        <label>
          <input 
          type='checkbox'
          name='conContact'
          checked={formData.canContact}
          onChange={handleChange}
          />
        </label>

        {/* Radio */}

        <label>
          Text
          <input 
          type='radio'
            name='contact' 
            value='text'
            onChange={handleChange}
          />
          </label>

          <label>
            Email
          <input
          type='radio'
            name='contact' 
            value='email'
            onChange={handleChange}
          />
          </label>
        <textarea
          name='message'
          value={formData.message}
          onChange={handleChange}
          placeholder='Message...'
          rows='5'
        />
      </form>
    </>
  )
}

export default App
