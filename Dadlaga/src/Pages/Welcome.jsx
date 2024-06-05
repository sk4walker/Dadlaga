import { useState } from 'react'

//------------------------------------------------ Welcome Page--------------------------------------------------------------------------------------
function Welcome() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div>
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
    </>
  )
}

export default Welcome
//------------------------------------------------ Welcome Page--------------------------------------------------------------------------------------
