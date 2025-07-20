import { useContext, useState } from 'react'
import axios from 'axios';
import { ListContextProvider, ListContext } from "./Components/Context.jsx"
import Form from './Components/Form'
import Display from './Components/Display.jsx';


function AppContent() {
  const {     
    uglyList,
    handleDeleteFunc,
    handleEditFunc
   } = useContext(ListContext)
      
  return (
    <>
      <div className='header'>Ugly Things</div>
      <Form />
      <div className="ugly-list">
        {uglyList.map(item => (
          <Display
            key={item._id}
            {...item}
            handleDeleteFunc={handleDeleteFunc}
            handleEditFunc={handleEditFunc}
            />
          ))}
        </div>
    </>
  )  
}

  function App() {
      return (
        <ListContextProvider>
          <AppContent />
        </ListContextProvider>
      )
    }

export default App