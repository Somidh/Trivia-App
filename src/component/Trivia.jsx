// https://opentdb.com/api.php?amount=5&category=31&type=multiple


import React from 'react'
import { decode } from 'html-entities'
const Trivia = (props) => {

  const optionArray = [decode(props.optionOne), decode(props.optionTwo), decode(props.optionThree), decode(props.optionFour)]

    const [isActive, setIsActive] = React.useState(props.isActive)

    React.useEffect(() => {

    },[1])
    
  function randomOption() {
    const random = Math.floor(Math.random() * optionArray.length)
    const temp = optionArray[random]

    optionArray.splice(random, 1)

    return temp
  }


  function handleClick() {
     setIsActive(prev => !prev)
  }
  

 

  return (

    <div >
      <div className="question-container flex flex-col items-start justify-center w-[42em] gap-3 mx-auto my-10 ">
        <h1 className='question font-medium text-[#293264] text-2xl'>{props.index}. {decode(props.question)}</h1>
        <ul className="options flex items-center justify-center gap-5 ">
          <li style={{backgroundColor: isActive ? 'red' : ''}}
          onClick={handleClick}
           className='border-2 border-solid border-[#4D5B9E] rounded-xl px-3.5 py-1 cursor-pointer w-auto  hover:bg-[#D6DBF5]'>{randomOption()}</li>
          <li className='border-2 border-solid border-[#4D5B9E] rounded-xl px-3.5 py-1 cursor-pointer w-auto hover:bg-[#D6DBF5]'>{randomOption()}</li>
          <li className='border-2 border-solid border-[#4D5B9E] rounded-xl px-3.5 py-1 cursor-pointer w-auto hover:bg-[#D6DBF5]'>{randomOption()}</li>
          <li className='border-2 border-solid border-[#4D5B9E] rounded-xl px-3.5 py-1 cursor-pointer w-auto hover:bg-[#D6DBF5]'>{randomOption()}</li>
        </ul>
        <hr className='border w-full my-3' />
      </div>
    </div>
  )
}

export default Trivia