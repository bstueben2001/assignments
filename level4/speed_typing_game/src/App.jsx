import { useState , useEffect , useRef } from 'react'


function App() {
  const STARTING_TIME = 5

  const [typed, setTyped] = useState("")
  const [timer, setTimer] = useState(STARTING_TIME)
  const [isRunning, setIsRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  // const [initState, setInitState] = useState(null)
  const textBoxRef = useRef(null)
  
  function handleChange(e){
    const {value} = e.target
    setTyped(value)
  }
  
  function calcWordCount(typed){
      const wordsArr = typed.trim().split(" ")
      return wordsArr.filter(word => word !== "").length
  }

  function startGame(){
    setIsRunning(true)
    setTimer(STARTING_TIME)
    setTyped("")
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
  }

  function endGame(){
    setIsRunning(false)
    setWordCount(calcWordCount(typed))    
  }

  useEffect(() => {
    if(isRunning && timer > 0) {
      setTimeout(() => {
        setTimer(time => time - 1)
      }, 1000)
    } else if(timer === 0){
      endGame()
    }
  },[timer, isRunning])



  return (
    <>
      <h1>Speed Typing Game</h1>
      <textarea 
        ref={textBoxRef}
        onChange={handleChange}
        value={typed}
      />
      <h4>Time remaining: {timer}</h4>
      <button 
        onClick={startGame}
        disabled={isRunning}
        
        >
          Start
      </button>
      <h1>Word Count: {wordCount}</h1>
    </>
  )
}

export default App
