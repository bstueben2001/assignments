import {useState, useEffect } from 'react'
import axios from 'axios';
import Form from './Components/Form';
import MemeDisplay from './Components/MemeDisplay';
import MemeList from './Components/MemeList';

function App() {

//all image styling
const imgStyle = {
    width: "450px",
    height: "600px",
    margin: "20px",
    border: "2px solid black"
}

//starter meme state
const [startMeme, setStartMeme] = useState();

//starter meme
useEffect(() => {
  axios.get("https://api.imgflip.com/get_memes")
      .then(res => {
          const memes = res.data.data.memes;
              if (memes.length > 0) {
                  setStartMeme(memes[0].url);
              }})
      .catch(err => console.log(err))
  },[])

//meme values from Form
const [memeInfo, setMemeInfo] = useState({
    topText: "",
    bottomText: "",
    imgURL: "",
    index: ""
})

//meme array
const [memeList, setMemeList] = useState([])

//handles changes to the form inputs live
function handleFormChange(e) {
  const { name, value } = e.target
  setMemeInfo(prev => ({
    ...prev,
    [name]: value
  }))
}

//submit function that adds to the "memeList" array and updates the memeList state
function handleFormSubmit(e) {
  e.preventDefault()
  let newMeme = {
    ...memeInfo,
    imgURL: startMeme
  }
  addMeme(newMeme)
}

//editing state
const [editingIndex, setEditingIndex] = useState(null);

//editing function
function handleEditChange(e, index) {
  const { name, value } = e.target;
  // console.log(e.target)
  // console.log(name, "name")
  // console.log(value, "value")
  setMemeList(prevList =>
    prevList.map((meme, i) =>
      i === index ? { ...meme, [name]: value } : meme
    )
  );
}

// save changes function, and reset back to original format
function saveEdit() {
  setEditingIndex(null);
}

//delete function
//filters out the index number of the meme that we want to delete
function deleteMeme(index) {
  setMemeList(prevList => prevList.filter((_, i) => i !== index));
}

//random meme generator
const getRandomMeme = () => {     
  axios.get("https://api.imgflip.com/get_memes")
      .then(res => {
          const memes = res.data.data.memes;
          const randomMeme = memes[Math.floor(Math.random() * memes.length)].url
          setStartMeme(randomMeme)
      })
      .catch(err => console.log(err))
};

//push into meme array function
function addMeme(newMeme) {
  setMemeList(prevMemeList => [...prevMemeList, newMeme])
  console.log("new meme", newMeme)
  console.log("Meme List", memeList)
}



return (
    <div className='container'>
    <header className='header'>Meme Generator</header>
      <Form 
        memeInfo={memeInfo} 
        handleChange={handleFormChange} 
        handleSubmit={handleFormSubmit}
      />
      <div className='getMemeContainer'>
        <button className='getMeme' onClick={getRandomMeme}>Get random meme!</button>
      </div>
      <MemeDisplay 
        imgURL={startMeme}
        memeText={{
          topText: memeInfo.topText,
          bottomText: memeInfo.bottomText
        }}
      />
      <br/>
      {memeList.map((meme, index) => (
      <div className='meme-container' key={index}>
  {editingIndex === index ? (
        <div className='meme-image'>
          <input
            type="text"
            name="topText"
            value={meme.topText}
            onChange={(e) => handleEditChange(e, index)}
            placeholder="Top Text"
          />
          <input
            type="text"
            name="bottomText"
            value={meme.bottomText}
            onChange={(e) => handleEditChange(e, index)}
            placeholder="Bottom Text"
          />
          <button onClick={saveEdit}>Update</button>
        </div>
      ) : (
        <>
          <MemeDisplay
            imgURL={meme.imgURL}
            memeText={{
              topText: meme.topText,
              bottomText: meme.bottomText,
            }}
          />
          <button className='editButton' onClick={() => setEditingIndex(index)}>Edit</button>
          <button className='deleteButton' onClick={() => deleteMeme(index)}>Delete</button>
        </>
      )}
    </div>
      ))}
    </div>
  )
}

export default App