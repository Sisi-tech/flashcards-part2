import { useState } from 'react'
import plantData from "./component/Data.jsx";

function App() {
  const [cardId, setCardId] = useState(0);
  const [question, setQuestion] = useState(true);
  const [answer, setAnswer] = useState("");

  const handlePrevious = () => {
    if (cardId > 0) {
      setCardId(cardId - 1);
      setQuestion(true);
    }
    if (cardId == 0) {
      setCardId(plantData.length - 1);
    }
  }
  const handleNext = () => {
    if (cardId < plantData.length - 1) {
      setCardId(cardId + 1);
      setQuestion(true);
    }
    if (cardId == plantData.length - 1) {
      setCardId(0);
    }
  }
  const handleRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * plantData.length);
    setCardId(randomIndex);
    setQuestion(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your guess has been submitted!");
    setAnswer("");
  }

  return (
    <>
      <div className='w-screen h-screen flex flex-col justify-center text-center items-center pt-10 text-xl bg-[url("./assets/Greens.jpg")] bg-cover'>
        <h2 className='text-2xl font-bold pb-8'>The Ultimate Plant Parent!</h2>
        <p className='pb-8'>How good of a plant parent are you? Test all of your planty knowledge here!</p>
        <p>Number of cards: {cardId}</p>
        <form className='flex flex-col justify-center items-center pt-6' onSubmit={handleSubmit}>

          <div className='flex items-center justify-center w-[500px] h-[260px] bg-opacity-50 shadow-md rounded-md hover:rounded-lg hover:scale-110 '
              style={{backgroundColor: plantData[cardId]?.color || 'bg-green-300'}} >
            {question && <h2>{plantData[cardId]?.Question}</h2>}
          </div>

          <div className='flex lg:gap-2 sm:gap-1 items-center justify-center pt-4'>
          <label className='font-bold'>Guess the answer here:</label>
          <input type="text" placeholder='Place your answer here' className='border border-black p-1 rounded-md' value={answer} onChange={(e)=> setAnswer(e.target.value)}/>
          <button className='bg-white p-2 rounded-md m-1 hover:bg-lime-200 shadow-sm shadow-lime-900' type="submit" disabled={answer.length === 0} >Submit Guess</button>
          </div>
          <div className='flex gap-4 pt-8'>
            <button className='bg-white w-[60px] p-1 rounded-md text-2xl hover:bg-lime-200 shadow-sm shadow-lime-900' type="button" onClick={handlePrevious}>
              &#8592;
            </button>
            <button  className='bg-white w-[60px] p-1 rounded-md text-2xl hover:bg-lime-200 shadow-sm shadow-lime-900' type="button" onClick={handleNext}>
              &#8594;
            </button>
            <button className='bg-white w-[200px] p-1 rounded-md hover:bg-lime-200 shadow-sm shadow-lime-900' type="button" onClick={handleRandomChoice}>
              Shuffle Cards
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
