import axios from "axios"
import React, {useState , useEffect} from "react"

const ListContext = React.createContext() //backpack created

function ListContextProvider(props){

//states
  const [uglyInfo, setUglyInfo] = useState({
    imgUrl: "",
    title: "",
    description: ""
  })
  const [editMode, setEditMode] = useState(null)
  const [uglyList, setUglyList] = useState([]) //ugly thing list


  
//functions

//
function handleChange(e) {
  const { name, value } = e.target
  setUglyInfo(prev => ({
    ...prev,
    [name]: value
  }))
}

//function of submission (pass to form via props)
function handleSubmit(e) {
  e.preventDefault()
  addUgly(uglyInfo)
  setUglyInfo({ // Clear form
    imgUrl: "", 
    title: "", 
    description: "" 
  }) 
  
}



//create
  //add ugly item to list and changing state (and keeping prev state)
  function addUgly(newUgly){    
    //post to API
    axios.post(`https://api.vschool.io/brendonstueben/thing`, newUgly)
      .then(response => {
        const newItemWithId = {
            ...newUgly,
            _id: response.data._id
          } 
          setUglyList(prev => [...prev, newItemWithId]) //update list state with ID'd item
          console.log("New Ugly:", newUgly)
          console.log("New Ugly + ID:", newItemWithId)
      })
      .catch(error => console.log(error))
  }



//read
  //returns list of uglies that have been pushed to the uglyList
  useEffect(() => {
    axios.get(`https://api.vschool.io/brendonstueben/thing`)
      .then(response => setUglyList(response.data))
      .catch(err => console.log(err))
  }, [])



//update
  //initiates edit mode and allows input fields and changes
  function handleEditFunc(idToEdit){
    const itemToEdit = uglyList.find(item => item._id === idToEdit)
      if (itemToEdit) {
        setUglyInfo({
        imgUrl: itemToEdit.imgUrl,
        title: itemToEdit.title,
        description: itemToEdit.description
      })
      setEditMode(idToEdit)
      }
  }
  //changes editMode back to original appearance
function saveEdit(idToUpdate, updatedData) {
    axios.put(`https://api.vschool.io/brendonstueben/thing/${idToUpdate}`, updatedData)
      .then(res => {
        setUglyList(prev =>
          prev.map(item =>
            item._id === idToUpdate ? res.data : item
          )
        )
        setEditMode(null)
      })
      .catch(err => console.log(err))
  }



//delete    
  //delete card function
  function handleDeleteFunc(idToDelete){
     axios.delete(`https://api.vschool.io/brendonstueben/thing/${idToDelete}`)
    .then(() => {
      setUglyList(prevList => prevList.filter(item => item._id !== idToDelete))
    })
    .catch(err => console.log(err))
  }



  return(
    <ListContext.Provider
      value={{
        uglyInfo,
        uglyList,
        handleChange,
        handleSubmit,
        addUgly,
        setUglyInfo,
        handleEditFunc,
        editMode,
        setEditMode,
        saveEdit,
        handleDeleteFunc
      }}
    >
      {props.children}
    </ListContext.Provider>
    )
  }
  
  export {ListContext, ListContextProvider}
