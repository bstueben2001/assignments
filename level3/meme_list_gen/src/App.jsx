import { useState } from 'react'
import MemeForm from './Components/MemeForm'
import MemeImages from './Components/MemeImages'
import MemeList from './Components/MemeList'
import MemeDisplay from './Components/MemeDisplay'

function App() {

  const [memeList, setMemeList] = useState([
    {memeText:{topText: "string", bottomText: "string"}, imgURL: "https://upload.wikimedia.org/wikipedia/commons/3/31/Made20bacon.png"},

  ])

  const [memeText, setMemeText] = useState({
      topText: "",
      bottomText: ""
  })

  const addMemeToList = (memeData) => {
    let newMemeList = memeList;
    newMemeList.push(memeData);
    setMemeList(newMemeList);
    console.log(memeList)
  }

  return (
    <>
      <MemeForm memeTextInfo={setMemeText} addMemeToList={addMemeToList}/>
      <MemeImages memeText={memeText} />
      {memeList && <MemeList memeList={memeList} count={memeList.length}/>}
      {/* {memeList.map((meme, index) => {
          return <MemeDisplay key={index} memeText={meme.memeText} imgURL={meme.imgURL}/> 
      })} */}
    </>
  )
}

export default App

//to-do
//style top/bottom text onto image
//complete memelist component