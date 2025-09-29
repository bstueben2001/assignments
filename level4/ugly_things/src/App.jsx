import { useContext, useState } from 'react'
import axios from 'axios';
import { ListContextProvider, ListContext } from "./Components/Context.jsx"
import Form from './Components/Form'
import Display from './Components/Display.jsx';


function AppContent() {
  const {      
    uglyList,
    handleDeleteFunc,
    handleEditFunc,
    editMode,
    uglyInfo,
    handleChange,
    saveEdit,
    setEditMode
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
            handleEditFunc={handleEditFunc}
            handleDeleteFunc={handleDeleteFunc}
            editMode={editMode}
            uglyInfo={uglyInfo}
            handleChange={handleChange}
            saveEdit={saveEdit}
            setEditMode={setEditMode}
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