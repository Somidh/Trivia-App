import React from 'react'

const StartPage = (props) => {
    const[showStartPage, setShowStartPage ] = React.useState(props.show)

    function showPage() {
        return setShowStartPage(false)
    }
    
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-[#F5F7FB]' >
        <h1 className='text-[#293264] font-semibold text-3xl tracking-wider font-mono'>Quizzical</h1>
        <p className='font-mono text-md w-64 text-center '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, culpa.</p>
        <button onClick={showPage} className='bg-[#4D5B9E] w-[193px] h-[52px] mt-7 text-white font-mono cursor-pointer rounded-xl'>Start Quiz</button>
    </div>
  )
}

export default StartPage