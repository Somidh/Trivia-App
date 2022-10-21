import React from 'react'
import {useEffect,useState} from 'react'
import StartPage from './component/StartPage';
import Data from './Data/data';
import Trivia from './component/Trivia';
import {nanoid} from 'nanoid'


// function decodeHTMLEntities(text) {
//   let textArea = document.createElement('textarea');
//   textArea.innerHTML = text;
//   return textArea.value;
// }


function App() {

  useEffect(() => {
         
    fetch('https://opentdb.com/api.php?amount=5&category=31&type=multiple')
    .then(res => res.json())
    .then(data => setData(data.results))

},[])

const [data, setData] = useState([])
console.table(data)
const questions = data.map((item,index) => {
++index
const options = item.incorrect_answers.map(option => option)
  const optionFour = item.correct_answer 
  

  return <Trivia 
          index={index}
          key={nanoid()}
          question={item.question}
          optionOne={options[0]}
          optionTwo ={options[1]}
          optionThree = {options[2]}
          optionFour = {optionFour}
          />
})






  return (
    <div className="App flex flex-col items-center justify-center">
      {/* <StartPage show={true} /> */}
     {questions}
      <button className=' bg-[#4D5B9E] w-40 h-16 mb-10 rounded-xl text-[white] cursor-pointer '>Check answers</button>
    </div>
  );
}

export default App;
